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
    sortContent:
      "<p>Gyanodhayam yoga class founded by Jai Guruji was extremely helpful. I have benefited a lot from the yogic practices.</p>",
    content:
      "<p>Gyanodhayam yoga class founded by Jai Guruji was extremely helpful. I have benefited a lot from the yogic practices. Their food system is unique and it helped me a lot to be healthy physically. Their yoga and meditation techniques are eternal and it helped me to be healthy mentally. It kindles joy in our soul that lasts forever. Totally Gyanodhayam is a complete package that taught me the true value of life in this birth. I long to serve the society better with Gyanodhayam.</p>",
  },
  {
    id: 2,
    image: gravida,
    slug: "Anand-Thiyagarajan",
    title: "Anand Thiyagarajan",
    author: "- <b>Anand Thiyagarajan</b>, Infrastructure Engineer, Singapore ",
    sortContent:
      "<p>Gyanodhayam is a life changing learning to me.I am kind of person who goes along with the life without any particular goals and suffer when there are problems.</p>",
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

export const OurCenters = {
  south: [
    {
      id: 1,
      center: "Karur",
      address:
        "12-B4, Thinnappa Nagar east,<br/> Gandhigramam, <br/>Karur - 639004. ",
      contactNumber: "94898 16307",
    },
    {
      id: 2,
      center: "Madurai",
      address:
        "C,178, Govindhasamy Street,<br/> Thirunagar (7th Stop), Near to Siva sakthi Training School,<br/> Madurai - 625006.",
      contactNumber: "96777 87500",
    },
    {
      id: 3,
      center: "Sivakasi",
      address: "4/678 B Kamarajapuram colony,<br/>Sivakasi - 626189.",
      contactNumber: "94426 65634",
    },
    {
      id: 5,
      center: "Palani",
      address:
        "P26E14/3, Naayakar Street,<br/> Opalaapuram, Aayakudi,<br/>Palani - 624613.",
      contactNumber: "89403 30296",
    },
    {
      id: 6,
      center: "Kulithalai",
      address:
        "Kalaimagal School,<br/> Near Periya Paalam,<br/>Kulithalai - 639104.",
      contactNumber: "99444 99507",
    },
    {
      id: 7,
      center: "Ishethra",
      address:
        "Ishethra International Residential School,<br/> Pungambadi Village,<br/> Aravakurichi - 639201.",
      contactNumber: "88386 23171",
    },
  ],
  north: [
    {
      id: 8,
      center: "Mugalivakkam",
      address:
        "2nd Floor, Plot No.6 Sekar Avenue,<br/> Main Road, Kumudam Nagar, Mugalivakkam,<br/>Chennai - 600125.",
      contactNumber: "99401 75614",
    },
    {
      id: 9,
      center: "Mogappeir",
      address:
        "Jai Academy of fine arts No 175,<br/>Boppana Venkatarathnam street, Justice Rathna Pandiyan Road,<br/> Golden George Nagar, Mogappair East,<br/>Chennai - 6000107.",
      contactNumber: "79048 42529",
    },
    {
      id: 10,
      center: "Chitlapakkam",
      address:
        "10 muthalamman koil street,<br/> Chitlapakkam,<br/>Chennai - 600064.",
      contactNumber: "98403 14238",
    },
    {
      id: 12,
      center: "Pondicherry",
      address:
        "9A, Punithavathi Illam,<br/> Thiruvallur Salai Moolakadai, Villianur,<br/>Pondicherry - 605110.",
      contactNumber: "93454 50218",
    },
    {
      id: 13,
      center: "Cuddalore",
      address:
        "68, Subburaya Chetti Street,<br/> Thirupathiripuliyur,<br/>Cuddalore - 607002.",
      contactNumber: "89734 45087",
    },
    {
      id: 14,
      center: "Bangalore",
      address:
        "3rd Floor, #4, Sharadha Nilaya,<br/> Balaji Layout, Gollahalli Electronic City Road,<br/> Electronic City Phase I,<br/>Bangalore - 560100.",
      contactNumber: "99624 02762",
    },
  ],
  east: [
    {
      id: 15,
      center: "Tanjavur",
      address:
        " No.7, Lakshmi Estate, Rr Nagar, Pudukkottai Road, Thanjavur - 613005.",
      contactNumber: "95974 30336",
    },
    {
      id: 16,
      center: "Trichy",
      address:
        "Mango kids school Periyar nagar,<br/> 1st Main road, Srirangam,<br/>Trichy - 620005.",
      contactNumber: "96000 18154",
    },
    {
      id: 17,
      center: "Vishnupuram",
      address:
        "Government Primary School, <br/>Vadugakudi, Kadagampadi (PO),<br/>Tiruvarur (DT) - 610102. ",
      contactNumber: "89403 54731",
    },
    {
      id: 18,
      center: "Pudukkottai",
      address: "TCPS Computer Education, Dhandapanipural 1st Street, Near New Bustand, Pudukkottai- 622001",
      contactNumber: "99942 89195",
    },
    {
      id: 19,
      center: "Orathanadu",
      address:
        "No, 6, North Street,<br/> Ganaphy Nagar, M.C. Road,<br/>Thanjavur(7) - 613007.",
      contactNumber: "99440 55483",
    },
    {
      id: 20,
      center: "Pattukottai",
      address: "202, new housing unit, Ponnavarayan kottai, Pattukottai - 614602",
      contactNumber: "97503 58564",
    },
    {
      id: 21,
      center: "Kumbakonam",
      address:
        "JRG Nursery Primary School,<vr/> Kamarajar Nagar 1st street, Assor Road, Palakkarai,<br/>Kumbakonam - 614201.",
      contactNumber: "95005 65384",
    },
    {
      id: 22,
      center: "Karandhai",
      address:
        "Umamaheswaran Higher Secondary School,<br/> Karanthai Tamizh Sangam, Karanthandan Kudi,<br/>Tanjavur (DT) - 613002.",
      contactNumber: "94422 74525",
    },
    {
      id: 23,
      center: "Tiruvarur",
      address:
        "Opposite to Vandampalai ITI,<br/> Tiruvarur to Mayiladudurai Main Road, Vandampalaiyam,<br/>Tiruvarur (DT) - 625007.",
      contactNumber: "88389 56740",
    },
    {
      id: 24,
      center: "Thiruvaiyaru",
      address:
        "No. 2, Chinnammal Nagar,  Vellachimandapam, Vilangudi Road, Thiruvaiyaru - 613204.",
      contactNumber: "99449 21422",
    },
    // More centers...
  ],
  west: [
    {
      id: 25,
      center: "Tirupur Main",
      address:
        "Arul suyambu maligai store Back side,<br/> 4/337 pappa nagar, Old Cotton mill road,<br/> Near new bus stand,<br/>Tirupur - 641603.",
      contactNumber: "99449 21422",
    },
    {
      id: 26,
      center: "Tirupur Vidhyalaya",
      address:
        "Side No: 14 Selva Lakshmi nagar,<br/> First street Vidhyalaya Bus Stop, Palladam Road,<br/>Tirupur - 641605",
      contactNumber: "99408 22869",
    },

    {
      id: 26,
      center: "Erode",
      address:
        "No 9,Jothikrishna Thottam, JeevanananthamvSt,Behind Amirtha milk diary,Kollampalayam, Erode - 638002",
      contactNumber: "99444 99508",
    },
    {
      id: 27,
      center: "Pollachi",
      address:
        "Appasamy Layout, Suppammal Street,<br/> Near to Om Sakthi Temple, Mahalingapuram,<br/>Pollachi - 642003.",
      contactNumber: "97881 18819",
    },
    {
      id: 28,
      center: "Avinashi",
      address:
        "73/15,1st Floor, Mangalam Road,<br/> Near Avinashiappar temple, opposite of Rotary Arangam,<br/>Avinashi - 641654.",
      contactNumber: "95009 89006",
    },
    {
      id: 29,
      center: "Coimbatore",
      address:
        "88/116 Old Weavers Colony,<br/> Raja Annamalai Rd, Saibaba Colony, Near Bank Of Baroda ATM,<br/>Coimbatore - 641011.",
      contactNumber: "97914 50956",
    },
    {
      id: 30,
      center: "Komarapalayam",
      address:
        "230B, Sunrise Academy, High School Rd,<br/> Perantharkadu, Komarapalayam,<br/>Namakkal - 638183",
      contactNumber: "6381499412",
    },
  ],
  international: [
    {
      id: 30,
      center: "Singapore",
      address:
        "Blk 133, #04-301 (Room 3)Jurong gateway Road, Singapore - 600133  ",
      contactNumber: "+65 8430 7024 , +65 90614699",
    },
    {
      id: 31,
      center: "Malaysia",
      address: "Jalan Patin, Skudai, 81300 Johor Bahru, Johor, Malaysia",
      contactNumber: "+65 8797 8623 (WhatsApp), +60 1124104733 (Mobile)",
    },
  ],
};

export const capitalizeFLetter = (string = "") => {
  if (string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
};

export const FounderListTamilBook = [
  { id: 1, title: "Udal" },
  { id: 2, title: "Udal Padhukappu" },
  { id: 3, title: "Udal Payirchi" },
  { id: 4, title: "Mudras" },
  { id: 5, title: "Nalan Muraisei" },
  { id: 6, title: "Uyirai kakkum unave marundhu" },
  { id: 7, title: "Guru" },
  { id: 8, title: "Guruvasam - part 1" },
  { id: 9, title: "Guruvasam - part 2" },
  { id: 10, title: "Kelvi Gyanam - part 1" },
  { id: 11, title: "Kelvi Gyanam - part 2" },
  { id: 12, title: "Kailaagai" },
  { id: 13, title: "Ariyamugam (Experience with Guruji - shared by Guruji's Disciples)" },
  { id: 14, title: "Vanavan Vazhi (Written in Tamil & English)" },

  { id: 15, title: "Thavam" },
  { id: 16, title: "Gunam" },
  { id: 17, title: "Manam" },
  { id: 18, title: "Karma" },
  { id: 19, title: "Nalam Vazha" },
  { id: 20, title: "Asareeri" },
  { id: 21, title: "Olukkam" },
  { id: 22, title: "Unmei Virumbhi Malar" },
];

export const FounderListOfTamilSpeach = [
  { id: 1, title: "Amaidhi" },
  { id: 2, title: "Ooivu" },
  { id: 3, title: "Puthunarchi" },
  { id: 4, title: "Noi Thavirka" },
  { id: 5, title: "Maghilchi" },
  { id: 6, title: "Sahasraharam" },
  { id: 7, title: "Kailaagai" },
  { id: 8, title: "Kobam" },
  { id: 9, title: "Thavam" },
  { id: 10, title: "Karma" },
  { id: 11, title: "Thai thandhai mariyadhai" },
  { id: 12, title: "Unmei Aridhal" },
];

export const FounderListOfEnglishSpeach = [
  { id: 1, title: "Present" },
  { id: 2, title: "Relationship" },
  { id: 3, title: "Identify Yourself" },
  { id: 4, title: "Be Healthy" },
  { id: 5, title: "Respect" },
];

export const FounderListOfMusicCD = [
  { id: 1, title: "Om" },
  { id: 2, title: "Om Namashivaya" },
  { id: 3, title: "Iraicel 1" },
  { id: 4, title: "Iraicel 2" },
  { id: 5, title: "Surabhi" },
  { id: 6, title: "Guru Saran" },
  { id: 7, title: "Guru Bhajan" },
  { id: 8, title: "Music to mute sick" },
];
