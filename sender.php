<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $text = $_POST['text'] ?? '';

  $to = 'info@x-truckcare.com'; // Замените на адрес получателя
  $subject = 'New Form Submission';
  $message = "Name: $name\nPhone: $phone\nText: $text";
  $headers = "From: info@x-truckcare.com"; // Замените на ваш адрес электронной почты или оставьте пустым

  if (mail($to, $subject, $message, $headers)) {
    // Письмо успешно отправлено
    echo 'Email sent successfully. <a href="index.html">Return to the page</a>';
  } else {
    // Ошибка при отправке письма
    echo 'Error sending email';
  }
}
?>
