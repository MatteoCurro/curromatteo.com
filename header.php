<?php
// //get the last-modified-date of this very file
// $lastModified=filemtime(__FILE__);
// //get a unique hash of this file (etag)
// $etagFile = md5_file(__FILE__);
// //get the HTTP_IF_MODIFIED_SINCE header if set
// $ifModifiedSince=(isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) ? $_SERVER['HTTP_IF_MODIFIED_SINCE'] : false);
// //get the HTTP_IF_NONE_MATCH header if set (etag: unique file hash)
// $etagHeader=(isset($_SERVER['HTTP_IF_NONE_MATCH']) ? trim($_SERVER['HTTP_IF_NONE_MATCH']) : false);

// //set last-modified header
// header("Last-Modified: ".gmdate("D, d M Y H:i:s", $lastModified)." GMT");
// //set etag-header
// header("Etag: $etagFile");
// //make sure caching is turned on
// header('Cache-Control: public');

// //check if page has changed. If not, send 304 and exit
// if (@strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE'])==$lastModified || $etagHeader == $etagFile)
// {
//        header("HTTP/1.1 304 Not Modified");
//        exit;
// }

?>
<!DOCTYPE html>
<html lang="it">
<head>
	<title>Matteo Currò</title>
	<meta charset="utf-8">
	<meta name="robots" content="index, follow" />
	
	<meta name="author" content="Matteo Currò - curromatteo@gmail.com">

	<!-- Dublin Core Metadata : http://dublincore.org/ -->
	<meta name="DC.title" content="Matteo Currò - Business Card">
	<meta name="DC.subject" content="Matteo Currò Front-end developer e Web designer.">
	<meta name="DC.creator" content="Matteo Currò - curromatteo@gmail.com">
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"> -->
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="favicon.png">
	<link rel="apple-touch-icon-precomposed" href="favicon.png">
	<!-- <script src="js/pace.min.js"></script> -->
  	<!-- <link href="css/loading.css" rel="stylesheet" /> -->
<link href='http://fonts.googleapis.com/css?family=Share+Tech' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/nprogress.css">
<link rel="stylesheet" href="css/style.css">
	<!-- <link rel="stylesheet" href="css/style.css"> -->
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>

<body>
<div class="wrapper">
	<header>
			<h1><a href="/" title="Vai all'home page">Matteo Curr&ograve;</a></h1>
		</header>