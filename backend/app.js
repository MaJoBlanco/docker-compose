require("dotenv").config();
console.log("NEO4J_URI:", process.env.NEO4J_URI);
const express = require("express");
const neo4j = require("neo4j-driver");

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

// Conexión a Neo4j usando variables de entorno
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

// Middleware para parsear JSON en peticiones POST
app.use(express.json());

// ✅ Endpoint GET: Personas
app.get("/personas", async (req, res) => {
  const session = driver.session();
  try {
    const result = await session.run(`
      MATCH (p:Persona)
      RETURN p.id AS id, p.nombre AS nombre, p.edad AS edad
      LIMIT 20
    `);

    const personas = result.records.map(record => ({
      id: record.get("id"),
      nombre: record.get("nombre"),
      edad: record.get("edad")
    }));

    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await session.close();
  }
});

// ✅ Nuevo endpoint POST: crear Persona con datos quemados
app.post("/personas", async (req, res) => {
  const session = driver.session();
  try {
    const result = await session.run(
      `
      CREATE (p:Persona {id: $id, nombre: $nombre, edad: $edad})
      RETURN p.id AS id, p.nombre AS nombre, p.edad AS edad
      `,
      {
        id: 9999, // 🔥 dato quemado
        nombre: "Juan Pérez", // 🔥 dato quemado
        edad: 30 // 🔥 dato quemado
      }
    );

    const persona = result.records[0].toObject();
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await session.close();
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
