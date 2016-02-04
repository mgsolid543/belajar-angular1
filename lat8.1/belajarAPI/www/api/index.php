<?php
include 'db.php';

$id = (isset($_GET['id'])) ? $_GET['id'] : null;

getUserById($id);

function getUserById($user_id) {
    $where = ($user_id) ? 'WHERE id = :user_id' : '';
    $sql = "Select id, name, city, age From user $where Order By id";
    try {
        $db = getDB();
        $stmt = $db -> prepare($sql);
        
        $stmt -> bindParam("user_id", $user_id);
        $stmt -> execute();
        $users = $stmt -> fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo '{"users: '. json_encode($users) .'}';
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage().'}}';
    }

} 
?>