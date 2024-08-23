const ClickBankProduct = {
  bettingSystems: [
    {
      id: 1,
      img: `<img class="img-fluid" src="./img/latest-blog/l-blog-1.jpg" alt="">`,
      link: `<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>`,
      title: `26 October, 2018 | By Mark Wiens`,
    },
    {
      id: 2,
      img: `<img class="img-fluid" src="./img/latest-blog/l-blog-1.jpg" alt="">`,
      link: `<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>`,
      title: `26 October, 2018 | By Mark Wiens`,
    },
    {
      id: 3,
      img: `<img class="img-fluid" src="./img/latest-blog/l-blog-1.jpg" alt="">`,
      link: `<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>`,
      title: `26 October, 2018 | By Mark Wiens`,
    },
    {
      id: 4,
      img: `<img class="img-fluid" src="./img/latest-blog/l-blog-1.jpg" alt="">`,
      link: `<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>`,
      title: `26 October, 2018 | By Mark Wiens`,
    },
    {
      id: 5,
      img: `<img class="img-fluid" src="./img/latest-blog/l-blog-1.jpg" alt="">`,
      link: `<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>`,
      title: `26 October, 2018 | By Mark Wiens`,
    },
  ],
};

// ClickBankProduct bettingSystems section

const ClickBankProductContainer_1 = () => {
  let ClickBankProductHtml_1 = document.querySelector(
    ".html-ClickBankProduct_1"
  );
  let displayClickBankProductItem_1 = "";
  ClickBankProduct.bettingSystems.map(
    (ClickBankProductItem_1) => {
      const { img, title, link} =
        ClickBankProductItem_1;
      displayClickBankProductItem_1 += `
        <div class="col-lg-3 col-md-6">
						<div class="l_blog_item">
							<a href="">
							${img}
							</a>
							<p class="date">${title}</p>
							${link}
						</div>
						
					</div>
  `;
      ClickBankProductHtml_1.innerHTML =
        displayClickBankProductItem_1;
    }
  );
};
ClickBankProductContainer_1();

