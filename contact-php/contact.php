<?php
// get posted data
$data = json_decode(file_get_contents("php://input"),true);

$ToEmail = 'nikunjk1993@gmail.com';
$EmailSubject = 'User Contact Information';
	$mailheader = "From: ".$data["email"]."\r\n";
		$mailheader .= "Reply-To: ".$data["email"]."\r\n";
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
$MESSAGE_BODY = '<table style=" background:#F4F4F4 ; text-align : center">

	<tr>
		<th colspan="2" style="padding:10px;">
			<b>Contact Details</b>
		</th>
	</tr>
	<tr>
		<td style="padding:10px;">
			<b>Name:</b>
		</td>
		<td style="padding:10px;">'.$data["name"].'</td>
	</tr>
	<tr>
		<td style="padding:10px;">
			<b>E-mail:</b>
		</td>
		<td style="padding:10px;">'.$data["email"].'</td>
	</tr>
	<tr>
		<td style="padding:10px;">
			<b>Contact:</b>
		</td>
		<td style="padding:10px;">'.$data["phone"].'</td>
	</tr>
	<tr>
		<td style="padding:10px;">
			<b>Message:</b>
		</td>
		<td style="padding:10px;">'.$data["message"].'</td>
	</tr>


	<tr>
		<th colspan="2" style="padding:10px;">
			<b>Thank you for contacting us.</b>
		</th>
	</tr>
	<tr>
		<td colspan="2" style="padding:10px;">
			You are very important to us, all information received will always remain confidential.
		</td>

	</tr>
</table>';

mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
