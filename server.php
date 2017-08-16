<?php
//header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
//header('Content-Type:application/json');

echo json_encode($_POST);
//$params = json_decode(file_get_contents('php://input'));
//$reponse['statuslogin']=1;
$response =[];
if(isset($_POST['password']) && isset($_POST['username']))
{
    if($_POST['username'] == 'admin' && $_POST['password']=='admin')
    {
 //echo $response['status'] == 'logged';
 echo $reponse['statuslogin']='loggedin';
echo $response['user'] = 'admin';
    }
    else{
 //$response['status'] == 'error';
    	echo $reponse['statuslogin']='error';
    }

}
//echo "hello madhavi";
print_r($_POST);
//echo $_POST['password'];
echo json_encode($response);

?>