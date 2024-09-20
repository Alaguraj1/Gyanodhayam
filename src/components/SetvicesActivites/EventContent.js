import React, { useEffect, useState } from "react";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { singleSlugData } from "../../utils/function.utils";
import axios from "axios";
import { Link } from "react-router-dom";

const ServicesActivitiesContent = () => {
  const [category, setCategory] = useState(null);

  const fetchChildCategories = async () => {
    try {
      const parentSlug = "service-activity"; // Replace with your parent category slug

      // First, fetch the parent category to get its ID
      const parentRes = await axios.get(
        `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${parentSlug}`
      );

      if (parentRes.data.length === 0) {
        throw new Error("Parent category not found");
      }

      const parentId = parentRes.data[0].id;

      // Now fetch the child categories
      const childrenRes = await axios.get(
        `https://file.gyanodhayam.org/wp-json/wp/v2/categories?parent=${parentId}`
      );

      setCategory(childrenRes.data); // This will be an array of child categories
    } catch (err) {
      console.error("Error fetching child categories: ", err);
    }
  };

  console.log("category", category);
  //file.gyanodhayam.org/category/service-activity/

  useEffect(() => {
    fetchChildCategories();
    // GetPageData();
  }, []);

  return (
    <>
      <div className="container relative mt-100 mb-100 lg-mt-50 lg-mb-50">
        {category &&
          category.map((childCategory) => (
            <div key={childCategory.id}>
              <h3>
                <Link to={`/services-activites-events/${childCategory.slug}`}>
                  {childCategory.name}
                </Link>
              </h3>
            </div>
          ))}
        <div>
          
        </div>
      </div>
    </>
  );
};

export default ServicesActivitiesContent;
