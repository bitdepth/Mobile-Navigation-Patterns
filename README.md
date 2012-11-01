Mobile-Navigation-Patterns
==========================

A repository of jquery plugins for various mobile navigation patterns


# Jquery.SlideMenu.js 
### A fast & lightweight jQuery plugin solution for Facebook style mobile sliding navigation.

 - Copyright 2012: Colin Clark, bitdepth.co.uk
 - Dual licensed under the MIT or GPL Version 2 licenses.

 This script is written as a fast and lightweight mobile menu pattern as seen on Facebook mobile site. No styling provided, it's completely up to you how you want to look.


[Demo page](http://demopage.com.html)


Usage Instructions
======

1. In your page create three container elements one for your navigation and another for your content.

2. Create a toggle menu button, this can be place outside of the content container but it makes more sense to place it inside it.

2. Call the plugin on your menu toggle button using the following syntax. You provide a string selector for the navigation container and the main content as well as the width you wish the navigation to occupy.


<pre>
	$('#toggle-menu-btn').slideMenu({
		nav: '[role=navigation]',
		content: '[role=main]',
		navWidth: '200px'
	});
</pre>