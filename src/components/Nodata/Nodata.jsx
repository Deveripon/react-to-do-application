import nodataimg from "../../assets/img/undraw_no_data_re_kwbl.svg";
const Nodata = ({ text, img = nodataimg }) => {
    return (
        <>
            <div className="nodata">
                <img className="w-48" src={img} alt="nodata" />
                <p className="text-teal-500 font-semibold text-2xl">{text}</p>
            </div>
        </>
    );
};

export default Nodata;
