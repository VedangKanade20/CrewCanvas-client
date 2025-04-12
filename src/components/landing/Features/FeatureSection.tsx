import FeatureTabCard from "./FeatureTabCard";
import FeatureTabData from "./FeatureTabData";

const FeatureSection = () => {
    return (
        <div>
            <div className="flex gap-10 max-lg:flex-col justify-center items-center max-lg:items-start ">
                <FeatureTabData
                    icon="✒️"
                    title="Amazing Feature"
                    description="This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand out. This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand."
                    color="bg-[#091215]"
                />
                <FeatureTabCard />
            </div>
        </div>
    );
};

export default FeatureSection;
