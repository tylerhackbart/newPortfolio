<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = 'From: TangledDemo';
    $to = 't.hackbart@gmail.com';

    $body = "From: $name\n Email: $email\n Subject: $subject\n Message: $message\n";

    if ($_POST['submit']) {
      if(mail($to, $subject, $body, $from)) {
        echo '<p>Your Message has been sent!</p>';
      } else {
        echo '<p>Something went wrong, go bacj and try again.</p>';
      }
    }
?>