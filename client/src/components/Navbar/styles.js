import {makeStyles} from "@material-ui/core"
const styles = makeStyles((theme) => ({
   
            appBar : {
                background: "#000000",
                background: "-webkit-linear-gradient(to right, #001510, #00bf8f)",   
                background: "linear-gradient(to left, #001510, #00bf8f)",
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                "@media (max-width : 900px)"  : {
                    paddingLeft: 0,
                },                    

            },
            appBarSpacer : theme.mixins.toolbar,
            menuButton : {
                fontWeight : 700,
                marginLeft : "30px",
                textDecoration :"none",
                color :"white !important",
                "&:hover" : {
                    borderBottom : "2px solid white",
                    borderRadius :"0px !important",
                    transform : "translateY(4px)",
                    
                },
                
            },
            toolbar : {
                display : "flex",
                alignItems :"center",
                justifyContent : "space-between",
           },
            drawerContainer :{
                padding : "20px 30px",
                background : "#000",
                
                borderRadius : "20px",
                margin : "10px",
                fontWeigth : "500",
            },
            brandContainer: {
                display: 'flex',
                alignItems: 'center',
            },
            image: {
                marginLeft: '15px',
            },
            mobileloginMenu :{
               float:"right",
            },
}));
export default styles;

