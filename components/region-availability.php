<?php
$photoGroups = [
  [
    'images' => ['magCulture.png'],
    'link' => 'https://magculture.com/collections/magazines/products/the-black-sea-whale-1',
  ],
  [
    'images' => ['Waterstones.png'],
    'link' => 'https://www.waterstones.com/book/the-black-sea-whale-no-1/9781738561605',
  ],
  [
    'images' => ['Charlotte_Street.png'],
    'link' => 'https://charlottestreetmagazine.com/products/the-black-sea-whale-magazine?_pos=1&_psq=black+sea&_ss=e&_v=1.0',
  ],
  [
    'images' => ['Hatchards.png'],
    'link' => 'https://www.hatchards.co.uk/book/the-black-sea-whale-no-1/9781738561605',
  ],
  [
    'images' => ['Agenda.png'],
    'link' => 'https://www.foyles.co.uk/book/the-black-sea-whale-no-1/9781738561605',
  ],
  [
    'images' => ['foyles.png'],
    'link' => 'https://agendabookshop.com/products/the-black-sea-whale-no-1-ideas-stories-from-ukraine-1?srsltid=AfmBOooxpQQ0xc2Yjz44CIOyKxFVDtKUSJ9wYz46LgWD3B-InEJlXJSU',
  ],
  [
    'images' => ['newsstand.png'],
    'link' => 'https://www.newsstand.co.uk/62-others-magazines/36136-subscribe-to-black-sea-whale-magazine-subscription.aspx',
  ],
  [
    'images' => ['shopify.png', 'bsw.png'],
    'link' => 'https://blackseawhale.myshopify.com',
  ],
];
?>

<section class="region-availability" style="max-width: 825px;">
  <h2 class="title">Available in the United Kingdom</h2>
  <p class="paragphe-text">The Black Sea Whale is available today at these fine magazine and booksellers in the United Kingdom today!</p>

  <div class="row g-3">
    <?php foreach ($photoGroups as $group): ?>
      <div class="col-12 col-sm-6 d-flex justify-content-center">
        <a href="<?= htmlspecialchars($group['link']) ?>" class="grid-item <?= count($group['images']) === 2 ? 'two-photos' : 'single-photo' ?>" target="_blank" rel="noopener noreferrer">
          <?php foreach ($group['images'] as $photo): ?>
            <img src="/test/assets/images/region-availability/<?= htmlspecialchars($photo) ?>" alt="Photo" />
          <?php endforeach; ?>
        </a>
      </div>
    <?php endforeach; ?>
  </div>

  <div class="region-availability__amazon">
    <h2>Available in the United States</h2>
    <div class="grid-item w-100">
      <a href="http://">
        <img src="/test/assets/images/region-availability/amazon.png" alt="amazon">
      </a>
    </div>
</section>