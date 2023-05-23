<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $text = $_POST['text'] ?? '';

  $to = 'xtruckcare@gmail.com'; // Замените на адрес получателя
  $subject = 'New Form Submission';
  $message = "Name: $name\nPhone: $phone\nText: $text";
  $headers = "From: xtruckcare@gmail.com"; // Замените на ваш адрес электронной почты или оставьте пустым

  mail($to, $subject, $message, $headers);
}
?>
