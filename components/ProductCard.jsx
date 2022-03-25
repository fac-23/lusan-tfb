import StyledLink from "./styled-components/StyledLink";
import StyledProductCard from "./styled-components/StyledProductCard";
import Link from "next/link";

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
}) {
  return (
    <div>
      <StyledProductCard>
        <div className="product-img-container">
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img alt={subCategory} src={img} />
        </div>
        <div className="info-container">
          <h2>{variety}</h2>
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
          <p>{subCategory}</p>
          <p>Price: £{price}</p>
          <Link href={`/products/${variety}`} key={variety} passHref>
            <StyledLink>More info</StyledLink>
          </Link>
        </div>
      </StyledProductCard>
    </div>
  );
}
