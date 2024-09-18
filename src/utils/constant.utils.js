import Image1 from "../assets/images/testimonial/img-1.jpg";
import Image2 from "../assets/images/testimonial/img-2.jpg";
import Image3 from "../assets/images/testimonial/img-3.jpg";

import First1 from "../assets/images/photos/img-1.jpg";

import Second1 from "../assets/images/photos/img-2.jpg";
import Second2 from "../assets/images/photos/img-3.jpg";

import Third1 from "../assets/images/photos/img-4.jpg";
import Third2 from "../assets/images/photos/img-5.jpg";
import Third3 from "../assets/images/photos/img-1.jpg";

// testimonial Images
import elementum from "../assets/images/testimonial/img-1.jpg";
import gravida from "../assets/images/testimonial/img-2.jpg";
import faucibus from "../assets/images/testimonial/img-3.jpg";
import turpis from "../assets/images/testimonial/img-4.jpg";
import faucibus_nisl from "../assets/images/testimonial/img-5.jpg";

export const Gallery_Data = [
  {
    id: 1,
    image: Image1,
    title: "Lorem ipsum dolor sit amet 1",
    slug: "lorem-ipsum-1",
  },
  {
    id: 2,
    image: Image2,
    title: "Lorem ipsum dolor sit amet 2",
    slug: "lorem-ipsum-2",
  },
  {
    id: 3,
    image: Image3,
    title: "Lorem ipsum dolor sit amet 3",
    slug: "lorem-ipsum-3",
  },
];

export const FirstData = [
  {
    id: 1,
    image: First1,
  },
  {
    id: 2,
    image: First1,
  },
  {
    id: 3,
    image: First1,
  },
  {
    id: 4,
    image: First1,
  },
  {
    id: 5,
    image: First1,
  },
  {
    id: 6,
    image: First1,
  },
  {
    id: 7,
    image: First1,
  },
  {
    id: 8,
    image: First1,
  },
  {
    id: 9,
    image: First1,
  },
  {
    id: 10,
    image: First1,
  },
  {
    id: 11,
    image: First1,
  },
  {
    id: 12,
    image: First1,
  },
  {
    id: 13,
    image: First1,
  },
  {
    id: 14,
    image: First1,
  },
  {
    id: 15,
    image: First1,
  },
  {
    id: 16,
    image: First1,
  },
];

export const SecondData = [
  {
    id: 1,
    image: Second1,
  },
  {
    id: 2,
    image: Second2,
  },
];

export const ThirdData = [
  {
    id: 1,
    image: Third1,
  },
  {
    id: 2,
    image: Third2,
  },
  {
    id: 3,
    image: Third3,
  },
];

// testimonials

export const TestimonialData = [
  {
    id: 1,
    image: elementum,
    title: "Dr. G Kaaruniya MD(S)",
    author: "- <b>Dr. G Kaaruniya MD(S)</b>, Siddha physician",
    slug: "Dr.G-Kaaruniya-MD(S)",
    sortContent:"<p>Gyanodhayam yoga class founded by Jai Guruji was extremely helpful. I have benefited a lot from the yogic practices.</p>",
    content:
      "<p>Gyanodhayam yoga class founded by Jai Guruji was extremely helpful. I have benefited a lot from the yogic practices. Their food system is unique and it helped me a lot to be healthy physically. Their yoga and meditation techniques are eternal and it helped me to be healthy mentally. It kindles joy in our soul that lasts forever. Totally Gyanodhayam is a complete package that taught me the true value of life in this birth. I long to serve the society better with Gyanodhayam.</p>",
  },
  {
    id: 2,
    image: gravida,
    slug: "Anand-Thiyagarajan",
    title: "Anand Thiyagarajan",
    author: "- <b>Anand Thiyagarajan</b>, Infrastructure Engineer, Singapore ",
    sortContent:"<p>Gyanodhayam is a life changing learning to me.I am kind of person who goes along with the life without any particular goals and suffer when there are problems.</p>",
    content:
      "<p>Gyanodhayam is a life changing learning to me.I am kind of person who goes along with the life without any particular goals and suffer when there are problems. I was not experienced to handle any kind of challenging situation by my selves and would be fearing for everything.</p> <p>I was just like another living being on this earth, just came to existence, living the life as it goes and die one day.</p>  <p>Guruji has given purpose for this life through Gyanodhayam. Through Gyanodhayam, I am able to understand the real goal for this life. I can handle the things better than before as I can try to correlate the actions and the results and be prepared. Life has taken 180 degree turn and the way I look at things now are different. Gyanodhayam is a holistic education system which taught me from basics and helped to understand the subtler things in life. Without Gyanodhayam I would be in a very confused condition.</p> <p>Gyanodhayam is not only an education program but it is a life style. It provided me the wisdom to identify, what is needed and what is not needed? What is truth and what is not? In simple terms, Gyanodhayam is developing me as a complete humanThanks to Guruji for giving this wonderful opportunity to the human kind and guiding us from within.</p>",
  },
];

// first 100 letters show
const maxLength = 100;
export const sortContent = (content) => {
  return content.length > maxLength
    ? content.substring(0, maxLength) + "..."
    : content;
};
