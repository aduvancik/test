<?php
$carouselSlides = [
  [
    'image' => '/test/assets/images/slider/slide-1.jpg',
    'type' => 'NON Fiction',
    'title' => 'An Albino Raven in the Museum of Soviet Values',
    'author' => 'Story by Viktoriia Antonenko',
    'illustrator' => 'Illustrated by Iryna Lysenko'
  ],
  [
    'image' => '/test/assets/images/slider/slide-2.jpg',
    'type' => 'NON Fiction',
    'title' => 'An Albino Raven in the Museum of Soviet Values',
    'author' => 'Story by Viktoriia Antonenko',
    'illustrator' => 'Illustrated by Iryna Lysenko'
  ],
  [
    'image' => '/test/assets/images/slider/slide-3.jpg',
    'type' => 'NON Fiction',
    'title' => 'An Albino Raven in the Museum of Soviet Values',
    'author' => 'Story by Viktoriia Antonenko',
    'illustrator' => 'Illustrated by Iryna Lysenko'
  ],
  [
    'image' => '/test/assets/images/slider/slide-4.jpg',
    'type' => 'NON Fiction',
    'title' => 'An Albino Raven in the Museum of Soviet Values',
    'author' => 'Story by Viktoriia Antonenko',
    'illustrator' => 'Illustrated by Iryna Lysenko'
  ],
  [
    'image' => '/test/assets/images/slider/slide-5.jpg',
    'type' => 'NON Fiction',
    'title' => 'An Albino Raven in the Museum of Soviet Values',
    'author' => 'Story by Viktoriia Antonenko',
    'illustrator' => 'Illustrated by Iryna Lysenko'
  ],
  [
    'image' => '/test/assets/images/slider/slide-6.jpg',
    'type' => 'NON Fiction',
    'title' => 'An Albino Raven in the Museum of Soviet Values',
    'author' => 'Story by Viktoriia Antonenko',
    'illustrator' => 'Illustrated by Iryna Lysenko'
  ],
  [
    'image' => '/test/assets/images/slider/slide-7.jpg',
    'type' => 'NON Fiction',
    'title' => 'An Albino Raven in the Museum of Soviet Values',
    'author' => 'Story by Viktoriia Antonenko',
    'illustrator' => 'Illustrated by Iryna Lysenko'
  ],
];
?>

<section class="bsw-anthology">
  <h2 class="title">An Anthology of Ideas & Stories!</h2>
  <div class="bsw-anthology__containerCarousel">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <!-- Слайди -->
      <div class="carousel-inner">
        <?php foreach ($carouselSlides as $index => $slide): ?>
          <div class="carousel-item <?= $index === 0 ? 'active' : '' ?>" data-bs-interval="5000">
            <div class="bsw-anthology__clide d-flex align-items-center">
              <img src="<?= $slide['image'] ?>" class="d-block w-50" alt="Slide image">
              <div class="bsw-anthology__text">
                <p><?= $slide['type'] ?></p>
                <h3><?= $slide['title'] ?></h3>
                <p><?= $slide['author'] ?><br><?= $slide['illustrator'] ?></p>
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
        <?php foreach ($carouselSlides as $index => $slide): ?>
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