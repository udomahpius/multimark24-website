// ALL JOURNAL PUBLICATIONS ARE MAPPED HERE IN JS FILE AND DISPLAY IN JOURNAL.HTML FILE

const serviceCollect = [
  {
    id: 1,
    img: `<img src="./img/service/service-1.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` Business & Investing `,
    body: ` Unlock the potential of your business with expert insights, proven strategies, and innovative approaches to smart investing and sustainable growth`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#business">Learn More</a> `,
  },
  {
    id: 2,
    img: `<img src="./img/service/service-2.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` E-Business & E-Marketing`,
    body: ` Master the digital landscape with cutting-edge strategies in e-business and e-marketing to drive online growth and customer engagement.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#e-marketing">Learn More</a> `,
  },
  {
    id: 3,
    img: `<img src="./img/service/service-3.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` Software & Services`,
    body: ` Explore the latest in software solutions and services to enhance productivity, streamline operations, and drive innovation across industries
`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#software">Learn More</a> `,
  },

  {
    id: 4,
    img: `<img src="./img/service/service-4.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: `  Affiliate Tools `,
    body: ` Discover essential affiliate tools to optimize your marketing efforts, boost performance, and maximize revenue through strategic partnerships.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#affiliate">Learn More</a> `,
  },

  {
    id: 5,
    img: `<img src="./img/service/service-5.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: `  Direct Offer Tracking`,
    body: ` Enhance your marketing strategy with direct offer tracking tools to measure campaign performance, boost conversions, and drive actionable insights.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#tracking">Learn More</a> `,
  },

  {
    id: 6,
    img: `<img src="./img/service/service-6.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: `Kelley Blue Book Trade-In Estimate`,
    body: `Get accurate trade-in estimates with Kelley Blue Book, helping you make informed decisions and maximize the value of your vehicle.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#trading">Learn More</a> `,
  },

  {
    id: 7,
    img: `<img src="./img/service/service-7.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: `YouTube Service `,
    body: ` Boost your YouTube presence with expert services that enhance video performance, optimize channel growth, and maximize
					viewer engagement.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#youtube">Learn More</a> `,
  },
  {
    id: 8,
    img: `<img src="./img/service/service-8.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` Amazon Platform `,
    body: `Leverage the power of the Amazon platform to grow your business, reach global customers, and maximize sales with proven
					strategies.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#amazon">Learn More</a> `,
  },
  {
    id: 9,
    img: `<img src="./img/service/service-9.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: `Search Ranking Strategy`,
    body: ` Elevate your online visibility with effective search ranking strategies that drive organic traffic, improve SEO, and
					boost your site's performance.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="./business/index.html#seo">Learn More</a> `,
  },
];

const serviceContainer = () => {
  let serviceHtml = document.querySelector(".html-service");
  serviceCollect.map((serviceItem) => {
    const { img, title, body, link } = serviceItem;
    serviceHtml.innerHTML += `
                  <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="service-item">
                        <div class="service-img">
                            ${img} 
                        </div>
                        <div class="rounded-bottom p-4">
                            <a href="#" class="h4 d-inline-block mb-4 text-secondary">${title}</a>
                            <p class="mb-4">${body}
                            </p>
                            ${link}
                        </div>
                    </div>
                </div>
        `;
    // displayserviceItem +=
    // serviceHtml.innerHTML = displayserviceItem;
  });
};
serviceContainer();
