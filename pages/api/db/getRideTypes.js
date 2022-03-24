import { client } from "../../../lib/sanity";

const query = `*[_type=='rides']{
  "service": title,
  "iconUrl": icon.asset->url,
  priceMultiplier,
  orderById
} | order(orderById asc)`;

const getRideTypes = async (req, res) => {
  try {
    const sanityRes = await client.fetch(query);

    res.status(200).send({ message: "success", data: sanityRes });
  } catch (err) {
    res.status(500).send({ message: "error", data: sanityRes });
  }
};

export default getRideTypes;
