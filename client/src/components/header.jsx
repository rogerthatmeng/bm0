import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="h-[194px]"
      style={{
        backgroundImage:
          "url(https://usdigital.bmo.com/www/build/b.8cc58ef1821ab39c.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0079c1",
      }}
    >
      <div className="mx-auto w-full p-6 ">
        <Link to="/">
          <img
            src="/images/Logo.svg"
            alt="bmo.com | Credit Cards, Banking, Mortgage, Personal Loans"
            height={88}
            width={88}
          />
        </Link>
        <p className="text-white text-[28px] font-[100] mt-[18px]">
          Discover the benefits of banking{" "}
          <span className="text-white font-bold">online</span>.
        </p>
      </div>
    </div>
  );
};

export default Header;
