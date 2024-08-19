// ALL JOURNAL PUBLICATIONS ARE MAPPED HERE IN JS FILE AND DISPLAY IN JOURNAL.HTML FILE

const serviceCollect = [
  {
    id: 1,
    img: `<img src="./img/service/service-1.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` Digital Marketing Strategies for Small Businesses `,
    body: ` Exploring cost-effective ways for small businesses to leverage digital marketing channels like social media, email marketing, and SEO.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
  },
  {
    id: 2,
    img: `<img src="./img/service/service-2.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` The Impact of Social Media Influencers on Consumer Behavior `,
    body: ` Analyzing how influencers shape purchasing decisions and how brands can effectively collaborate with them.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
  },
  {
    id: 3,
    img: `<img src="./img/service/service-3.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` Content Marketing: Creating Value for Your Audience`,
    body: ` Techniques for developing engaging content that attracts and retains customers.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
  },
  {
    id: 4,
    img: `<img src="./img/service/service-4.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` The Role of Data Analytics in Modern Marketing `,
    body: ` Utilizing data to drive marketing strategies, understand customer behavior, and measure campaign effectiveness.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
  },
  {
    id: 5,
    img: `<img src="./img/service/service-5.jpeg" class="img-fluid rounded-top w-100" alt="">`,
    title: ` Building a Strong Brand Identity`,
    body: ` Steps to create a compelling brand story, logo, and messaging that resonate with your target audience.`,
    link: `<a class="btn btn-primary text-white rounded-pill py-2 px-4" href="#">Learn More</a> `,
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
