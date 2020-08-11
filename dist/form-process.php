<?php
require_once '/home/s/seotest/english/public_html/phpmailer/Exception.php';
require_once '/home/s/seotest/english/public_html/phpmailer/PHPMailer.php';
require_once '/home/s/seotest/english/public_html/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (!empty($_POST["phone"])){ 
  $phone = $_POST["phone"];
  $name = $_POST["name"];
  $Body .= 'Заказ звонка <br/> Имя: ';
  $Body .= $name;
  $Body .= '<br/>';
  $Body .= 'Телефон: ';
  $Body .= $phone;
  $Body .= '<br/>';

  if(!empty($_POST["district"])) {
    $district = $_POST["district"];
  }
  if(!empty($_POST["time"])) {
    $time = $_POST["time"];
  }
  if(!empty($_POST["age"])) {
    $age = $_POST["age"];
  }
  if(!empty($_POST["club"])) {
    $club = $_POST["club"];
  }
  if(!empty($_POST["district"]) || !empty($_POST["time"]) || !empty($_POST["age"]) || !empty($_POST["club"])){
    $Body .= 'Ответы на вопросы для получения скидки:';
    $Body .= '<br/>';
    $Body .= 'Район проживания - ';
    $Body .= $district;
    $Body .= '<br/>';
    $Body .= 'Учебная смена - ';
    $Body .= $time;
    $Body .= '<br/>';
    $Body .= 'Возраст ребенка - ';
    $Body .= $age;
    $Body .= '<br/>';
    $Body .= 'Занимался ли еще где-то - ';
    $Body .= $club;
  }
  $mail = new PHPMailer(true);   
  try {
    $mail->SMTPDebug = 0;                                
    $mail->isSMTP();                                      
    $mail->Host = 'ssl://smtp.yandex.ru';  
    $mail->SMTPAuth = true;                              
    $mail->Username = 'teplosnab-sait@yandex.ru';          
    $mail->Password = 'SjRWLMske7n7wuc';                         
    $mail->SMTPSecure = 'tls';                           
    $mail->Port = 465;                      

    $mail->CharSet = "UTF-8";
    $mail->setFrom('teplosnab-sait@yandex.ru', 'Englishburg');
    $mail->addAddress('yuri@seoprostor.ru', 'Joe User');  
    $mail->addAddress('severov@seoprostor.ru', 'Joe User');  
    $mail->addAddress('chigishevatn@englishburgh.ru', 'Joe User');  
    $mail->isHTML(true);    
  	$mail->Subject = 'Заявка с лендинга Englishburg';
    $mail->Body    = str_replace ( "\n" , "" , $Body);

    $mail->send();
    echo 'success';
  } catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }
} 
?>