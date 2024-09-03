


const ShareAsaleBlog = {
  ShareAsaleUnggx_Blog: [
    {
      id: 1,
      img: ` <img class="img-fluid" src="./assets/images/bannerbg/blog-1.jpg" alt="">`,
      title: `From Our Blog`,
      text: ` Understanding Autoimmune Diseases`,
      link: `<a href="http://shrsl.com/4nwtq" class="btn btn-primary">View Blog</a>`,
    },
    {
      id: 2,
      img: ` <img class="img-fluid" src="./assets/images/bannerbg/blog-2.jpg" alt="">`,
      title: `From Our Blog`,
      text: ` What Makes Demodex Mites Worse?`,
      link: `<a href="http://shrsl.com/4nwtu" class="btn btn-primary">View Blog</a>`,
    },
    {
      id: 3,
      img: ` <img class="img-fluid" src="./assets/images/bannerbg/blog-3.jpg" alt="">`,
      title: `From Our Blog`,
      text: `Demodex Mite Removal Solutions `,
      link: `<a href="http://shrsl.com/4nwtw" class="btn btn-primary">View Blog</a>`,
    },
  ],
};

// ShareAsaleBlog lightinthebox_electronics section 

const ShareAsaleBlogProductContainer_1 = () => {
    let ShareAsaleBlogHtml_1 = document.querySelector('.ShareAsaleBlog_1');
    let displayShareAsaleBlog_1 = ''
    ShareAsaleBlog.ShareAsaleUnggx_Blog.map((ShareAsaleBlogItem_1) => {
        const {img,  text, link, title } = ShareAsaleBlogItem_1;
        displayShareAsaleBlog_1 += `
          <div class="col-md-4">
                    <div class="product-offer mb-30" style="height: 300px;">
                        ${img}
                        <div class="offer-text">
                            <h6 class="text-white text-uppercase">${title}</h6>
                            <h3 class="text-white mb-3 text-center">${text}</h3>
                           ${link}
                        </div>
                    </div>
                </div>
        `
        ShareAsaleBlogHtml_1.innerHTML = displayShareAsaleBlog_1;
    })
}
ShareAsaleBlogProductContainer_1()


