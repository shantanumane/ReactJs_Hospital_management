<?php
$conn=mysqli_connect("localhost","root","","psyber");
if(isset ($_POST['sub_btn']))
{
    $e_id = $_POST['e_id'];
    $e_username = $_POST['e_username'];
    $e_email = $_POST['e_email'];
    // $e_password = $_POST['e_password'];

    $query="update users SET name='$e_name', email='$e_email' where id=$e_id";
    $query_run=mysqli_query($conn,$query);
    if($query_run)
            {
                // echo "Saved";
                $_SESSION['status'] = "Admin Profile updated";
                $_SESSION['status_code'] = "success";
                // header('Location:');
                return redirect()->to(' http://localhost/psyber/public/customers')->send();
            }
            else
            {
                $_SESSION['status'] = "Admin Profile Not Updated";
                $_SESSION['status_code'] = "error";
                header('Location: /customers');
            }
}
?>
