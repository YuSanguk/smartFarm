let bagCool = false;
const openBag = () => {
  updateBag();
  $(".bagBackground").removeClass("invisible");
  $(".bagIcon").addClass("invisible");
  bagCool = true;
  setTimeout(() => {
    bagCool = false;
  }, 1000);
};

document.querySelector(".bagBackground").addEventListener("click", e => {
  if (
    e.target.classList.contains("bagBackground") ||
    e.target.classList.contains("bagExit")
  ) {
    closeBag();
  }
});

const closeBag = () => {
  if (
    $(".bagBackground").hasClass("invisible") === false &&
    bagCool === false
  ) {
    $(".bagBackground").addClass("invisible");
    $(".bagIcon").removeClass("invisible");
  }
};

const getBagItem = () => {
  const seed = window.localStorage.getItem("seed");
  const bucket = window.localStorage.getItem("bucket");
  const waterBucket = window.localStorage.getItem("waterBucket");
  const drug = window.localStorage.getItem("drug");
  const superDrug = window.localStorage.getItem("superDrug");
  const weed = window.localStorage.getItem("weed");
  const goldWeed = window.localStorage.getItem("goldWeed");
  let bagItem = {
    seed: seed,
    bucket: bucket,
    waterBucket: waterBucket,
    drug: drug,
    superDrug: superDrug,
    weed: weed,
    goldWeed: goldWeed,
  };
  return bagItem;
};

const updateBag = () => {
  const bagItem = getBagItem();
  document.querySelector(".inBag").innerHTML = "";
  const tag = document.createElement("p");
  tag.innerHTML = "X";
  tag.classList.add("bagExit");
  document.querySelector(".inBag").append(tag);

  const itemList = [
    "seed",
    "bucket",
    "waterBucket",
    "drug",
    "superDrug",
    "weed",
    "goldWeed",
  ];
  const itemList2 = [
    "씨앗",
    "양동이",
    "물양동이",
    "약품",
    "강화된 약품",
    "새싹",
    "황금 새싹",
  ];
  const itemList3 = ["seed.png"];
  let cnt = 0;
  for (let i = 0; i < Object.keys(bagItem).length; i++) {
    const tag1 = document.createElement("div");
    tag1.classList.add("itemRow");
    const tag2 = document.createElement("img");
    const tag3 = document.createElement("p");
    tag3.classList.add("itemName");
    if (bagItem[itemList[i]] === "true") {
      tag1.innerHTML = "";
      const itemName = itemList2[i];
      tag3.innerHTML = itemName;
      // img 추가
      tag2.setAttribute("alt", "itemImage");
      tag1.appendChild(tag2);
      tag1.appendChild(tag3);
      document.querySelector(".inBag").append(tag1);
      cnt++;
    } else if (i === Object.keys(bagItem).length - 1 && cnt === 0) {
      tag1.innerHTML = "가방이 비어있습니다";
      document.querySelector(".inBag").append(tag1);
    }
  }
};
