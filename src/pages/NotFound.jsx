import notFoundImg from "../assets/images/assets/ils_07.png";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";

function NotFound() {
  return (
    <>
      <Seo title="404 " />
      {/* End Seo Related data */}

      <div className="error-page d-flex align-items-center">
        <div className="content-wrapper">
          <h6>404</h6>
          <h1 className="font-recoleta">Page Not Found </h1>
          <p className="text-lg">
          Oops! The page you are looking for does not exist.<br/> Please return to the site’s homepage.
          </p>
          <Link to="/" className="theme-btn-four">
            GO BACK
          </Link>
        </div>
        {/* <!-- /.content-wrapper --> */}
        <img src={notFoundImg} alt="" className="shapes illustration" />
      </div>
      {/* <!-- /.error-page --> */}
    </>
  );
}

export default NotFound;
