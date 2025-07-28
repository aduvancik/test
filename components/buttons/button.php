<?php
// components/button.php
function renderButton($text)
{
  echo '<button class="custom-button">' . htmlspecialchars($text) . '</button>';
}
