<?php
$imageBasePath = '/test/assets/images/slider/';

$carouselSlides = [
  'slide-1.jpg',
  'slide-2.jpg',
  'slide-3.jpg',
  'slide-4.jpg',
  'slide-5.jpg',
  'slide-6.jpg',
  'slide-7.jpg',
];

$commonSlideData = [
  'type' => 'NON Fiction',
  'title' => 'An Albino Raven in the Museum of Soviet Values',
  'author' => 'Story by Viktoriia Antonenko',
  'illustrator' => 'Illustrated by Iryna Lysenko'
];
?>

<section class="bsw-anthology">
  <h2 class="title">An Anthology of Ideas & Stories!</h2>
  <div class="bsw-anthology__containerCarousel">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <!-- Слайди -->
      <div class="carousel-inner">
        <?php foreach ($carouselSlides as $index => $filename): ?>
          <div class="carousel-item <?= $index === 0 ? 'active' : '' ?>" data-bs-interval="5000">
            <div class="bsw-anthology__clide d-flex flex-column flex-md-row align-items-center">
              <img src="<?= $imageBasePath . $filename ?>" class="d-block w-7 md:w-50" alt="Slide image">
              <div class="bsw-anthology__text">
                <p><?= $commonSlideData['type'] ?></p>
                <h3><?= $commonSlideData['title'] ?></h3>
                <p><?= $commonSlideData['author'] ?><br><?= $commonSlideData['illustrator'] ?></p>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      <!-- Стрілки -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <!-- Пагінація -->
      <div class="carousel-indicators">
        <?php foreach ($carouselSlides as $index => $filename): ?>
          <button type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="<?= $index ?>"
                  class="<?= $index === 0 ? 'active' : '' ?>"
                  aria-current="<?= $index === 0 ? 'true' : 'false' ?>"
                  aria-label="Slide <?= $index + 1 ?>"></button>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
