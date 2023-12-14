import {HashLoader} from "react-spinners"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div style={{width : "100%", height: "80vh" , display:"flex",justifyContent: 'center',alignItems : "center"}}>
        <HashLoader color="#36d7b7"  size={150}/>
    </div>
  }