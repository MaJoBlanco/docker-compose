2. Verificación de funcionamiento
Al hacer la verificación con la base de datos se puede evidenciar que no funciona, neo4j_majo NO se resuelve por nombre de servicio
<img width="1120" height="179" alt="image" src="https://github.com/user-attachments/assets/73afd286-3f1d-41e9-9204-f0967a44c0aa" />

3. Despues de hacer la corrección de las redes en el docker compose se muestra el nuevo resultado
GET

<img width="898" height="555" alt="image" src="https://github.com/user-attachments/assets/582e3826-4b15-4b62-a94a-2628566a9a2d" />

POST

En primer momento se muestra los valores quemados en el código para la petición post

<img width="536" height="578" alt="image" src="https://github.com/user-attachments/assets/da84da4e-7082-4cca-b361-effae6267b91" />

Y se evidencia que se creo correctamente dicho dato
<img width="874" height="477" alt="image" src="https://github.com/user-attachments/assets/7d48a24f-c310-482b-9c4f-311c55d6572c" />


Respuesta final: La red mas practica para sistemas distribuidos es la user-defined bridge ya que esta permite acceder con el nombre del servicio y permite que permanezca al momento de reiniciar la maquina, cosa contraria con bridge por defecto pues esta es dada por docker y esta genera una ip que cambia al momento de iniciar de nuevo el servicio 
