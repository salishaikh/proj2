import React, { Component } from "react";

export class Newsitem extends Component {
 
  render() {
  let   {title , decsription , urlimg , newsUrl} = this.props;
 


    return (
      <>
        <div className="card my-3 mx-2 "  >
          <img src={!urlimg ? "https://static.ffx.io/images/$zoom_0.1765%2C$multiply_4%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_18/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/7ddcb982711b7dd86ea6b7009e09298ffa595e2e" :urlimg } className="card-img-top" alt="" style={{height : "10rem", objectFit : "contain"}} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {decsription}...
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read more
            </a>
          </div>
        </div> 
 
      </>
    );
  }
}

export default Newsitem;
