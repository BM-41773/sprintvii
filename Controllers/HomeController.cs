using fbfinal.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace fbfinal.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        ServiceReference1.Service1Client c1 = new ServiceReference1.Service1Client();
        public ActionResult Index()
        {
           // return View("Index");
            return View("Admin");
           // return View("Login2");
            // return View("flipkart");

        }
        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Index(ModelClass1 mc, String cmd, HttpPostedFileBase fle, string X_emailaddress, string x_password, string X_Email, string X_id)
        {


            if (cmd == "Login")
            {
                //int presentdate = Convert.ToInt32(DateTime.Today);
                //c1.suspnding(X_id);
                //DateTime D = DateTime.Today;
                ////if(c1.suspnding(X_id))
                //{
                //    string str = "canot login";
                //     return Content("<script language='JavaScript' type='text/JavaScript'>alert('" + str + "')</script>");
                //}







                string X_logginid = "";
                string X_F = "";
                string X_Snme = "";
                string X_prop = "";
                //   string X_ID = "";
                string Stus = "";
                string X_loginid = "";


                SqlConnection con = new SqlConnection("Data Source=DESKTOP-46KB8VH\\SQLEXPRESS;Initial Catalog=facebooklogin;Integrated Security=True");
                // ServiceReference1.Service1Client c1 = new ServiceReference1.Service1Client();
                // string lis;
                
                string li = c1.Login(X_emailaddress, x_password);

                if (li.Contains("Responsecode:200"))
                {
                    c1.loginId(X_emailaddress, x_password, out X_logginid, out X_F, out X_Snme, out X_prop);
                    c1.logout(X_logginid, out Stus);
                    ViewData["status"] = Stus;
                    ViewData["mainloginid"] = X_logginid;
                    ViewData["frstname"] = X_F;
                    ViewData["srname"] = X_Snme;
                    ViewData["profile"] = X_prop;
                    return View("Login2");
                }



                //  else
                // {

                // return Content("<script language='JavaScript' type='text/JavaScript'>alert('" + li + "')</script>");
                // }

            }


            if (cmd == "Create an account")
            {
                if (c1.block(X_Email))
                {
                    string str = "It is a delete account";
                    return Content("<script language='JavaScript' type='text/JavaScript'>alert('" + str + "')</script>");
                }


                int presentyear = Convert.ToInt16(DateTime.Now.Year.ToString());
                int year = Convert.ToInt16(mc.X_Year);

                int age = presentyear - year;
                if (age >= 13)
                {
                    if (fle != null && fle.ContentLength > 0)
                    {
                        string path = Path.Combine(Server.MapPath("~/propic2"),
                                                   Path.GetFileName(fle.FileName));
                        fle.SaveAs(path);
                        string ce = mc.Signup(path);
                    }
                    return View("verify 1");
                }
                // else
                // {
                // return null;
                // }

            }


            return null;
        }


        [AcceptVerbs(HttpVerbs.Post)]

        public ActionResult Login2(ModelClass1 mc, string srchterm, String cmd1)
        {



            if (cmd1 == "S")
            {
                // SqlConnection con = new SqlConnection("Data Source=DESKTOP-46KB8VH\\SQLEXPRESS;Initial Catalog=facebooklogin;Integrated Security=True");
                //        con.Open();
                //        SqlCommand cd = new SqlCommand("select Firstname,Surname,Profilepic,Email from  loginuser where Firstname like '" + srchterm + "%'", con);

                //        SqlDataAdapter da = new SqlDataAdapter(cd);

                //        DataTable dt = new DataTable();
                //        da.Fill(dt);
                //        List<Friends> lit = new List<Friends>();

                //        foreach (DataRow row in dt.Rows)
                //        {
                //            Friends lit1 = new Friends()
                //            {

                //                X_Firstname = row["Firstname"].ToString(),
                //                X_Surname = row["Surname"].ToString(),
                //                X_Email = row["Email"].ToString(),
                //                X_propic = row["Profilepic"].ToString()
                //            };
                //            lit.Add(lit1);

                //        }
                return View("Login2");

            }
            return null;


        }





        public string serchfrnd(string name)
        {
            string si = c1.serchtype(name);
            return si;
        }
        public void friend(string X_senderid, string X_reciverid)
        {
            c1.frnds(X_senderid, X_reciverid);

        }
        public void srch(string X_senderid, string X_reciverid)
        {
            c1.conform(X_senderid, X_reciverid);
        }
        public string approve(string X_senderid, string X_receiverid)
        {
            string str = c1.approvelfrnd(X_senderid, X_receiverid);
            return str;
        }
        public void dlt(string X_senderid, string X_reciverid)
        {
            c1.dlete(X_reciverid, X_senderid);
        }
        public string serch(string loginid)
        {
            string str = c1.frndsrch(loginid);
            return str;
        }
        public void ufrnd(string X_reciverid, string X_senderid)
        {
            c1.unfrnd(X_reciverid, X_senderid);
        }
        public string feeds(string X_loginid, string Status)
        {
            string str = c1.post(X_loginid, Status);
            return str;
        }

        public string upload()
        {
            String imagenme = "";
            string Totable = "";
            // string Paths = "";
            if (System.Web.HttpContext.Current.Request.Files.AllKeys.Any())
            {
                var pics = System.Web.HttpContext.Current.Request.Files["uplodings"];
                if (pics.ContentLength > 0)
                {
                    var filename = Path.GetFileName(pics.FileName);
                    var ext = Path.GetExtension(pics.FileName);
                    imagenme = Guid.NewGuid().ToString();
                    var contpath = Server.MapPath("/imageposting/") + imagenme + ext;
                    imagenme = imagenme + ext;
                    Totable = "/imageposting/" + imagenme;
                    var path = contpath;
                    pics.SaveAs(path);

                }

            }
            return JsonConvert.SerializeObject(Totable);

        }

        public String pst(string X_loginid, string postingimage, string postingheader)
        {
            string str = c1.posting(X_loginid, postingimage, postingheader);
            return str;
        }
        public string ADV_post()
        {
            string str = c1.user_serch();
            return str;
        }




        //[AcceptVerbs(HttpVerbs.Post)]

        //  public ActionResult profile( string cmd1,string X_Loginid, string frtname, string sename, string mil, string mob,  string DT_dob,string gdr, string lng)
        //  {


        //      if (cmd1 == "Save")
        //      {

        //        //  c1.save (X_Loginid,frtname,sename,mil,DT_dob,gdr,lng)       


        //          ViewData["Firstname"] = frtname;
        //          ViewData["Surname"] = sename;
                  //ViewData["Email"] = mil;
        //          ViewData["DT_dob"] = DT_dob;
        //          ViewData["Gender"] = gdr;



        //      }
        //      return View("profile");


        //      }

        //  public ActionResult editing(string X_Loginid)
        //{


        //  string str = c1.save(X_Loginid);
        //{


        //  return json("profile", "Home");          
        //   return View("Profile");


        // }
        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult advert(string cmd, string X_Firstname, string X_Surname, string X_Email, string X_supPassword, string X_Day, string X_Month, string X_Year, string x_Gender)
        {
            if (cmd == "Create an account")
            {
                ServiceReference1.Service1Client c1 = new ServiceReference1.Service1Client();
                DateTime DT_dob = Convert.ToDateTime(X_Day + "/" + X_Month + "/" + X_Year);
                c1.adverte(X_Firstname, X_Surname, X_Email, X_supPassword, DT_dob, x_Gender);

            }
            return View("Login2");

        }
        public string add(string X_Loginid)
        {
            string str = c1.save(X_Loginid);
            return str;
        }

        public void DELT(string X_loginId, string email)
        {
            c1.delete_user(X_loginId, email);
        }
        public string Views(string X_id)
        {
            string str = c1.Edit_p(X_id);
            return str;
        }
        public void adverting_user(string X_id)
        {
            c1.advert_log(X_id);

        }
        public string pendingg(string ID)
        {
            string str = c1.approvel_pending(ID);
            return str;
        }
        public void SUS(string loginid)
        {
            c1.suspentdate(loginid);
        }
        public void UPDTE(string X_Loginid)
        {
            c1.status_one(X_Loginid);
        }
        //public void admin_role(string X_id)
        //{
        //    c1.rejecting(X_id);

        //}
        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Login3(string btn_1 )
        {
            if (btn_1 == "Flipkart")
            {
                string tempvar;
                string image;
                c1.pic(out image);
                ViewData["imges"] = image;
                return View("flipkart");
            }
            


            return null;

        }
        public string dt_cntnt()
        {
            string str = c1.fk_content();
            return str;
        }
       public void FUn()
        {

        }
       public string FUNT()
       {
           string str = c1.user_products();
               return str;

       }
       public string custmr1()
       {
           string str = c1.cstomr_product();
           return str;

       }
       public string viewing(string X_id)
       {
           string str = c1.details_view(X_id);
           return str;

       }
       public string pro_details()
       {
           string str = c1.product_buying();
           return str;

       }
       public void Fun1()
       {

       }
       public void Fun2()
       {

       }
        
    }
      
       
   

    }
        
   
       

        
         
      
         

    


   


      
    



    

  
        //public string sch = "";
        //public string srchterm
        //{
        //    get
        //    {
        //        return sch;
        //    }
        //    set
        //    {
        //        sch = value;
        //    }
        //}

        //public string serch()
        //{
        //    string sh;
        //    ServiceReference1.Service1Client snt = new ServiceReference1.Service1Client();
        //    sh = snt.serchtype(srchterm);

        //    var obj = JsonConvert.DeserializeObject<ModalClass>(sh); 

        //}
