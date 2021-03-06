/* eslint-disable @next/next/no-img-element */
import StyledLink from "./styled-components/StyledLink";
import StyledProductCard from "./styled-components/StyledProductCard";
import Link from "next/link";
import WishlistToggle from "./WishlistToggle";
import Bin from "./Bin";
import { useRouter } from "next/router";

// pass in an array of tags to render
export default function ProductCard({
  subCategory,
  variety,
  img,
  price,
  typeTags,
  climateTags,
  waterTags,
  soilTags,
  product,
  wishList,
  setWishList,
}) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <StyledProductCard>
      <Link href={`/products/${variety}`} passHref>
        <a className="product-img-link">
          <img alt={subCategory} src={img} />
        </a>
      </Link>

      <div className="info-container">
        <div className="title-wishlist">
          <h2>
            {variety} {subCategory}
          </h2>
          {path === "/wishlist" ? (
            <Bin variety={variety} setWishList={setWishList} />
          ) : (
            <WishlistToggle
              product={product}
              wishList={wishList}
              setWishList={setWishList}
              variety={variety}
            ></WishlistToggle>
          )}
        </div>
        <p>From £{price}</p>

        <div className="tag-container">
          {typeTags &&
            typeTags.map((tag) => (
              <span key={tag} className="type-tag">
                {tag.replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            ))}
          {climateTags &&
            climateTags.map((tag) => (
              <span key={tag} className="climate-tag">
                {tag.replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            ))}
          {waterTags &&
            waterTags.map((tag) => (
              <span key={tag} className="water-tag">
                {tag.replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            ))}
          {soilTags &&
            soilTags.map((tag) => (
              <span key={tag} className="soil-tag">
                {tag.replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            ))}
        </div>
      </div>
      <Link href={`/products/${variety}`} key={variety} passHref>
        <StyledLink>More info</StyledLink>
      </Link>
    </StyledProductCard>
  );
}
