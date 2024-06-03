<?php
/*
Plugin Name: ROAS Calculator
Description: Shortcode: [roas_calculator]. This plugin is a simple ROAS Calculate.
Version: 1.0
Author: Brksoft
Author URI:  https://brksoft.com
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Enqueue the JavaScript and CSS files
function roas_scripts() {
        // Enqueue the JavaScript file
        wp_enqueue_script('woo-heart-button', plugin_dir_url(__FILE__) . 'roas.js', array(), '1.0', true);

        // Enqueue the CSS file
        wp_enqueue_style('woo-heart-button-css', plugin_dir_url(__FILE__) . 'roas.css', array(), '1.0', 'all');
}

add_action('wp_enqueue_scripts', 'roas_scripts');

// Shortcode to display the heart button
function roas_shortcode() {
return '
<div>
    Ciro:<input type="number" id="ciro">
    <br><br><h4 id="baslik-tum-giderler">Tüm Giderler</h4>
    Mal Maliyetleri: <input type="number" id="mal_gider">
    Reklam Harcaması:<input type="number" id="reklam_gider">
    Kredi Kartı Ücretleri:<input type="number" id="kredikarti_gider">
    Kargo Ücreti:<input type="number" id="kargo_gider">
    Reklam Yönetim Maliyeti:<input type="number" id="reklamyonetim_gider">
    <br><br>
    <button type="reset" id="reset_button">Sıfırla</button>
    <button type="submit" id="hesapla_button">Hesapla</button><br><br>
    <span id="sonucSpani">
    <h6>Sonuç:&nbsp;</h6>
    <h6 id="sonuc"></h6>
    </span>
</div>
';
}

add_shortcode('roas_calculator', 'roas_shortcode');