const items = [
  { 
    type: 'project', 
    title: 'EC2 Instances Scheduler',
    img:'images/aws-icon.png',  
    link:'https://github.com/damianwojciechowski4/AWS-Projects/tree/main/proj-ec2-scheduler' 
  },
  { 
    type: 'project', 
    title: 'Cloud Resume',
    img:'images/aws-icon.png', 
    link: 'https://github.com/damianwojciechowski4/proj1-aws-resume-backend' 
  },
  { 
    type: 'project', 
    title: 'DDNS my public IP Updater - Cloudflare',
    img:'images/homelab.png',
    link: 'https://github.com/damianwojciechowski4/updateDDNS-Cloudflare' 
  },



  { type: 'certification', title: 'AWS Certified Developer Associate', img:'images/DEV.png', link:'https://www.credly.com/badges/1b0a6550-efd7-438e-b076-cb7b030f8efd/linked_in_profile' },
  { type: 'certification', title: 'AWS Certified Solutions Architect', img:'images/SAA.png', link:'https://www.credly.com/badges/ae784a3f-77dc-4a6d-b005-79c1a5dfae31/linked_in_profile' },
  { type: 'certification', title: 'AWS Certified Cloud Practitioner', img:'images/CCP.png', link:'https://www.credly.com/badges/5e8ba6f4-7f53-4366-92cf-8a6b2fb5364c/linked_in_profile' },
  { type: 'certification', title: 'HashiCorp Certified: Terraform Associate (003)', img:'images/TerraformAssoc.png', link:'https://www.credly.com/badges/05857d3d-a78d-4835-9a1d-26b1c8a688b1/linked_in_profile' },
  { type: 'certification', title: 'Juniper JNCIA-SEC', img:'images/JNCIA-SEC.png', link:'https://www.credly.com/badges/e5443399-4e57-4232-a17f-00976a1f0498/linked_in_profile' },
  { type: 'certification', title: 'CCNA', img:'images/CCNA.png', link:'https://www.credly.com/badges/320a1697-91f6-45cb-9c54-a7589885987c/linked_in_profile' },



  
];


const gallery = document.getElementById('gallery');
const tabs    = document.querySelectorAll('.filters .tab');

function render(filter) {
  gallery.innerHTML = '';
  const filtered = items.filter(item => item.type === filter);
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = item.type.charAt(0).toUpperCase() + item.type.slice(1);

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const btn = document.createElement('a');
    btn.href = item.link;
    btn.className = 'btn';
    btn.textContent = 'View';
    btn.target = '_blank'; // Open in new tab

    card.append(label, img, title, btn);
    gallery.append(card);
  });
}


tabs.forEach(btn => {
  btn.addEventListener('click', e => {
  e.preventDefault();
  tabs.forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.filter);
  });
 });

// Always show all (Portfolio) on load
render('project');