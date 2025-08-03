import DesigningChairperson from '../images/DesigningChairperson.png';

const teamData = [
  { name: "Arjun V", role: "President", rollNo: "23211a05x1", phone: "8688747852", email: "23211a05x1@bvrit.ac.in", linkedin: "https://www.linkedin.com/in/varshith-vinnakota/", image: DesigningChairperson },
  { name: "Akshaya T", role: "Vice President", rollNo: "23211a05v2", phone: "8317601566", email: "23211a05v2@bvrit.ac.in", image: "/images/MainLogo.jpg" },
  { name: "Yogesh Y", role: "General Secretary", rollNo: "23211a05x6", phone: "9701461428", email: "23211a05x6@bvrit.ac.in", image: "/images/team/23211a05x6.jpg" },
  { name: "Sowmya G", role: "Treasurer", rollNo: "23211a0588", phone: "6305055156", email: "23211a0588@bvrit.ac.in", image: "/images/team/23211a0588.jpg" },
  { name: "Sri Nithya P", role: "Chief Technical Chairperson", rollNo: "23211a05n0", phone: "9177845733", email: "23211a05n0@bvrit.ac.in", image: "/images/team/23211a05n0.jpg" },
  { name: "Varshith V", role: "Technical Head", rollNo: "23211a05w9", phone: "7675838249", email: "23211a05w9@bvrit.ac.in", image: "/images/team/23211a05w9.jpg" },
  { name: "Sai Sathwik P", role: "Technical Support", rollNo: "23211a05p6", phone: "8977176804", email: "23211a05p6@bvrit.ac.in", image: "/images/team/23211a05p6.jpg" },
  { name: "Srirama P", role: "Technical Support", rollNo: "23211a05p0", phone: "8886730002", email: "23211a05p0@bvrit.ac.in", image: "/images/team/23211a05p0.jpg" },
  { name: "Sarat T", role: "Technical Support", rollNo: "23211a05v5", phone: "8143956724", email: "23211a05v5@bvrit.ac.in", image: "/images/team/23211a05v5.jpg" },
  { name: "Abhishekar V", role: "Chief Research Chairperson", rollNo: "23211a05x0", phone: "7093322658", email: "23211a05x0@bvrit.ac.in", image: "/images/team/23211a05x0.jpg" },
  { name: "Akshit S", role: "Research Head", rollNo: "23211a05u6", phone: "8297936975", email: "23211a05u6@bvrit.ac.in", image: "/images/team/23211a05u6.jpg" },
  { name: "Sahasra N", role: "Research Support", rollNo: "23211a05l9", phone: "8523011519", email: "23211a05l9@bvrit.ac.in", image: "/images/team/23211a05l9.jpg" },
  { name: "Vivek M", role: "Research Support", rollNo: "24215a0532", phone: "8790510676", email: "24215a0532@bvrit.ac.in", image: "/images/team/24215a0532.jpg" },
  { name: "Swathi G", role: "Research Support", rollNo: "24215a0530", phone: "6303669819", email: "24215a0530@bvrit.ac.in", image: "/images/team/24215a0530.jpg" },
  { name: "Ashwath Reddy K", role: "Designing Chairperson", rollNo: "23211a05y9", phone: "9177320424", email: "23211a05y9@bvrit.ac.in", image: "/images/team/23211a05y9.jpg" },
  { name: "Meghana N", role: "Designing Head", rollNo: "23211a05m5", phone: "9550323927", email: "23211a05m5@bvrit.ac.in", image: "/images/team/23211a05m5.jpg" },
  { name: "Manasa S", role: "Designing Support", rollNo: "23211a05u2", phone: "7207863814", email: "23211a05u2@bvrit.ac.in", image: "/images/team/23211a05u2.jpg" },
  { name: "Soumya Sri T", role: "Designing Support", rollNo: "24215a0526", phone: "9346822633", email: "24215a0526@bvrit.ac.in", image: "/images/team/24215a0526.jpg" },
  { name: "Srujana K", role: "Designing Support", rollNo: "24215a0529", phone: "7095445311", email: "24215a0529@bvrit.ac.in", image: "/images/team/24215a0529.jpg" },
  { name: "Shanmukh Dheeraj P", role: "Social Media Chairperson", rollNo: "23211a05x9", phone: "9515584287", email: "23211a05x9@bvrit.ac.in", image: "/images/team/23211a05x9.jpg" },
  { name: "Sushanth T", role: "Social Media Head", rollNo: "23211a05v4", phone: "8247389904", email: "23211a05v4@bvrit.ac.in", image: "/images/team/23211a05v4.jpg" },
  { name: "Laasya Reddy G", role: "Social Media Support", rollNo: "23211a0585", phone: "7659025551", email: "23211a0585@bvrit.ac.in", image: "/images/team/23211a0585.jpg" },
  { name: "Sahith Reddy G", role: "Social Media Support", rollNo: "23211a05b6", phone: "8790085938", email: "23211a05b6@bvrit.ac.in", image: "/images/team/23211a05b6.jpg" },
  { name: "Sai Soumya V", role: "Social Media Support", rollNo: "23211a05w6", phone: "8317602792", email: "23211a05w6@bvrit.ac.in", image: "/images/team/23211a05w6.jpg" },
  { name: "Teja Sree I", role: "Marketing Chairperson", rollNo: "23211a05b7", phone: "8897392067", email: "23211a05b7@bvrit.ac.in", image: "/images/team/23211a05b7.jpg" },
  { name: "Siri Chandana", role: "Marketing Head", rollNo: "23211a0581", phone: "9550257947", email: "23211a0581@bvrit.ac.in", image: "/images/team/23211a0581.jpg" },
  { name: "Shiva Spurthi V", role: "Marketing Support", rollNo: "23211a05x2", phone: "7288922020", email: "23211a05x2@bvrit.ac.in", image: "/images/team/23211a05x2.jpg" },
  { name: "Siri Harini", role: "Marketing Support", rollNo: "24215a0533", phone: "9515781017", email: "24215a0533@bvrit.ac.in", image: "/images/team/24215a0533.jpg" },
  { name: "Rishith Reddy B", role: "Chief Collaboration Head", rollNo: "23211a05r3", phone: "9866657145", email: "23211a05r3@bvrit.ac.in", image: "/images/team/23211a05r3.jpg" },
  { name: "Eesha Priya", role: "Event Management Chairperson", rollNo: "23211a0580", phone: "7386436916", email: "23211a0580@bvrit.ac.in", image: "/images/team/23211a0580.jpg" },
  { name: "Vinuthna K", role: "Event Management Head", rollNo: "23211a05f1", phone: "8247619334", email: "23211a05f1@bvrit.ac.in", image: "/images/team/23211a05f1.jpg" },
  { name: "Shaik Irfan", role: "Event Management Support", rollNo: "23211a05t7", phone: "7816025015", email: "23211a05t7@bvrit.ac.in", image: "/images/team/23211a05t7.jpg" },
  { name: "Avaneesh T", role: "Event Management Support", rollNo: "23211a05v9", phone: "9391396196", email: "23211a05v9@bvrit.ac.in", image: "/images/team/23211a05v9.jpg" }
];

export default teamData;
