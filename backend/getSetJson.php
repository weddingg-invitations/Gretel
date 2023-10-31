<?php
// Получаем JSON из тела POST-запроса
$jsonData = file_get_contents("php://input");
echo file_put_contents("menu.json", $jsonData);
// Преобразуем JSON в объект PHP
// $data = json_decode($jsonData);

// // Теперь данные доступны как обычный объект PHP
// $key1 = $data->key1;
// $key2 = $data->key2;

// // Выполняйте необходимую обработку данных

// // Отправьте ответ в формате JSON (если необходимо)
// $response = array(
//     "message" => "Данные успешно получены и обработаны."
// );

// header("Content-Type: application/json");
// echo json_encode($response);
?>