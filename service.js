// ALL JOURNAL PUBLICATIONS ARE MAPPED HERE IN JS FILE AND DISPLAY IN JOURNAL.HTML FILE

const serviceCollect = [
  {
    id: 1,
    img: `<img src="./img/service/service-1.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` Business & Investing `,
    body: ` Master the digital landscape with cutting-edge strategies in e-business and e-marketing to drive online growth and customer engagement.`,
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
    title: ` E-commerce Trends and Their Impact on Traditional Retail `,
    body: `Understanding the shift towards online shopping and how traditional retailers can adapt.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
  },
  {
    id: 7,
    img: `<img src="./img/service/service-7.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: `Customer Retention Strategies for Long-Term Success `,
    body: ` Methods to keep customers engaged and loyal through excellent customer service, loyalty programs, and personalized marketing.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
  },
  {
    id: 8,
    img: `<img src="./img/service/service-8.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` The Importance of Mobile Marketing in Today's Business Landscape `,
    body: ` How to optimize marketing efforts for mobile devices to reach a broader audience.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
  },
  {
    id: 9,
    img: `<img src="./img/service/service-9.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: `The Future of Artificial Intelligence in Marketing`,
    body: ` Exploring the potential of AI to revolutionize marketing through personalized experiences, chatbots, and predictive analytics.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
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
