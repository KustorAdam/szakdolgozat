import "./AdminPage.css"
import React,{useEffect, useState} from "react";
import axios from "axios"


export default function AdminPage() {
    const [users,setUsers] = useState([])
    const [cancelation,setCancelation] = useState([])
    const [weeklyspecial,setWeeklyspecial] = useState([])
    const [newpassowrdid, setNewpassworid] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [newemailid, setNewemailid] = useState("");
    const [newemail, setNewemail] = useState("");
    const [newphoneid, setNewphoneid] = useState("");
    const [newphone, setNewphone] = useState("");
    const [newp_nameid, setNewp_nameid] = useState("");
    const [newp_name, setNewp_name] = useState("");
    const [newp_phoneid, setNewp_phoneid] = useState("");
    const [newp_phone, setNewp_phone] = useState("");
    const [cancelationid, setCancelationid] = useState("");

    const [newbreakfastid, setNewbreakfastid] = useState("");
    const [newbreakfast, setNewbreakfast] = useState("");
    const [newlunchid, setNewlunchid] = useState("");
    const [newlunch, setNewlunch] = useState("");
    const [newdinnerid, setNewdinnerid] = useState("");
    const [newdinner, setNewdinner] = useState("");
    const [newdayid, setNewdayid] = useState("");
    const [newday, setNewday] = useState("");

    const [addname, setAddname] = useState("");
    const [addpassword, setAddpassword] = useState("");
    const [addemail, setAddemail] = useState("");
    const [addphone, setAddphone] = useState("");
    const [addp_name, setAddp_name] = useState("");
    const [addp_phone, setAddp_phone] = useState("");
    const [addrole_id, setAddrole_id] = useState("");




    

    const fetchUsers = async () => {
        try {
          const response = await axios.post('http://localhost:4004/adminusers', {  });
          
          setUsers(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      const fetchCancelation = async () => {
        try {
          const response = await axios.post('http://localhost:4004/admincencalation', {  });
          console.log(response.data)
          setCancelation(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      const fetchweeklyspecial = async () => {
        try {
          const response = await axios.post('http://localhost:4004/adminweeklyspecial', {  });
          console.log(response.data)
          setWeeklyspecial(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
    
      useEffect(() => {
        
    
        fetchUsers();
      }, []);

      useEffect(() => {
        
    
        fetchCancelation();
      }, []);

      useEffect(() => {
        
    
        fetchweeklyspecial();
      }, []);

      const handleChangepassword = async () => {
  
        try {
          await axios.post('http://localhost:4004/changepassword', {
            userid: newpassowrdid,
            password: newpassword,
            
      
          });
          
          fetchUsers();
        } catch (error) {
          console.error(error);
        }
      }

      const handleChangeemail = async () => {
  
        try {
          await axios.post('http://localhost:4004/changeemail', {
            userid: newemailid,
            email: newemail
            
      
          });
          
          fetchUsers();
        } catch (error) {
          console.error(error);
        }
      }

      const handleChangephone = async () => {
  
        try {
          await axios.post('http://localhost:4004/changephone', {
            userid: newphoneid,
            phone: newphone
            
      
          });
          
          fetchUsers();
        } catch (error) {
          console.error(error);
        }
      }

      const handleChangep_name = async () => {
  
        try {
          await axios.post('http://localhost:4004/changep_name', {
            userid: newp_nameid,
            p_name: newp_name
            
      
          });
          
          fetchUsers();
        } catch (error) {
          console.error(error);
        }
      }

      const handleChangep_phone = async () => {
  
        try {
          await axios.post('http://localhost:4004/changep_phone', {
            userid: newp_phoneid,
            p_phone: newp_phone
            
      
          });
          
          fetchUsers();
        } catch (error) {
          console.error(error);
        }
      }

      const handleDeletioncancelation = async () => {
  
        try {
          await axios.post('http://localhost:4004/deletecancelation', {
            cancelationid: cancelationid,
           
            
      
          });
          
          fetchCancelation();
        } catch (error) {
          console.error(error);
        }
      }

      const handleChangeday = async () => {
  
        try {
          await axios.post('http://localhost:4004/changeday', {
            userid: newdayid,
            newday: newday
            
      
          });
          
          fetchweeklyspecial()
        } catch (error) {
          console.error(error);
        }
      }

      const handlecreateuser = async () => {
  
        try {
          await axios.post('http://localhost:4004/createnewuser', {
            
            addname: addname,
            addpassword: addpassword,
            addemail: addemail,
            addphone: addphone,
            p_name: addp_name,
            p_phone: addp_phone,
            role_id: addrole_id
      
          });
          
          fetchUsers()
        } catch (error) {
          console.error(error);
        }
      }


      const handleChangebreakfast = async () => {
  
        try {
          await axios.post('http://localhost:4004/changebreakfast', {
            userid: newbreakfastid,
            newbreakfast: newbreakfast
            
      
          });
          
          fetchweeklyspecial()
        } catch (error) {
          console.error(error);
        }
      }


      const handleChangelunch = async () => {
  
        try {
          await axios.post('http://localhost:4004/changelunch', {
            userid: newlunchid,
            newlunch: newlunch
            
      
          });
          
          fetchweeklyspecial()
        } catch (error) {
          console.error(error);
        }
      }


      const handleChangedinner = async () => {
  
        try {
          await axios.post('http://localhost:4004/changedinner', {
            userid: newdinnerid,
            newdinner: newdinner
            
      
          });
          
          fetchweeklyspecial()
        } catch (error) {
          console.error(error);
        }
      }








      const handlepassworduserid= (e) => {
        setNewpassworid(e.target.value);
      };
      
      const handlepasswordchange = (e) => {
        setNewPassword(e.target.value);
      };

      const handleemailuserid= (e) => {
        setNewemailid(e.target.value);
      };
      
      const handleemailchange = (e) => {
        setNewemail(e.target.value);
      };

      const handlephoneuserid= (e) => {
        setNewphoneid(e.target.value);
      };
      
      const handlephonechange = (e) => {
        setNewphone(e.target.value);
      };

      const handlep_nameuserid= (e) => {
        setNewp_nameid(e.target.value);
      };
      
      const handlep_namechange = (e) => {
        setNewp_name(e.target.value);
      };

      const handlep_nphoneuserid= (e) => {
        setNewp_phoneid(e.target.value);
      };
      
      const handlep_phonechange = (e) => {
        setNewp_phone(e.target.value);
      };
      const handlecanceldelete = (e) => {
        setCancelationid(e.target.value);
      };


      const handlebreakfastuserid= (e) => {
        setNewbreakfastid(e.target.value);
      };
      
      const handlebreakfastchange = (e) => {
        setNewbreakfast(e.target.value);

      }

      const handlelunchuserid= (e) => {
        setNewlunchid(e.target.value);
      };
      
      const handlelunchchange = (e) => {
        setNewlunch(e.target.value);
      }

      const handledinneruserid= (e) => {
        setNewdinnerid(e.target.value);
      };
      
      const handledinnerchange = (e) => {
        setNewdinner(e.target.value);
      }

      const handledayuserid= (e) => {
        setNewdayid(e.target.value);
      };
      
      const handledaychange = (e) => {
        setNewday(e.target.value);
      }


      const handledaddname = (e) => {
        setAddname(e.target.value);
      }
      
      const handleaddpassword = (e) => {
        setAddpassword(e.target.value);
      }

      const handleaddemail = (e) => {
        setAddemail(e.target.value);
      }

      const handleaddphone = (e) => {
        setAddphone(e.target.value);
      }

      const handleaddp_name = (e) => {
        setAddp_name(e.target.value);
      }

      const handleaddp_phone = (e) => {
        setAddp_phone(e.target.value);
      }

      const handleaddrole_id = (e) => {
        setAddrole_id(e.target.value);
      }






    return(
        <div>
        <div className="scrollable-table">
        <table className="adminpage-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>Phone</th>
              <th>P_name</th>
              <th>p_phone</th>
              <th>role_id</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.p_name}</td>
                <td>{user.p_phone}</td>
                <td>{user.role_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
        <div><b> Password változtatása </b></div>
        <div> ID megadása a Password módosításához: </div>
        <input type="text"  onChange={handlepassworduserid}/>
        <div> Új jelszó </div>
        <input type="text"  onChange={handlepasswordchange}/>
        <button onClick={handleChangepassword}>Beállítás</button>

        <div><b> Email cím változtatása </b></div>
        <div> ID megadása a Email cím módosításához: </div>
        <input type="text"  onChange={handleemailuserid}/>
        <div> Új Email </div>
        <input type="text"  onChange={handleemailchange}/>
        <button onClick={handleChangeemail}>Beállítás</button>

        <div><b> Phone number változtatása </b></div>
        <div> ID megadása a Phone number módosításához: </div>
        <input type="text"  onChange={handlephoneuserid}/>
        <div> Új Phone number </div>
        <input type="text"  onChange={handlephonechange}/>
        <button onClick={handleChangephone}>Beállítás</button>

        <div><b> Parent name változtatása </b></div>
        <div> ID megadása a Parent name módosításához: </div>
        <input type="text"  onChange={handlep_nameuserid}/>
        <div> Új Parent name </div>
        <input type="text"  onChange={handlep_namechange}/>
        <button onClick={handleChangep_name}>Beállítás</button>

        <div><b> Parent phone változtatása </b></div>
        <div> ID megadása a Parent phone módosításához: </div>
        <input type="text"  onChange={handlep_nphoneuserid}/>
        <div> Új Parent phone </div>
        <input type="text"  onChange={handlep_phonechange}/>
        <button onClick={handleChangep_phone}>Beállítás</button>

        <div><b> Új felhasználó hozzáadása </b></div>
        <div> Felhasználónév: </div>
        <input type="text"  onChange={handledaddname}/>
        <div> Jelszó </div>
        <input type="text"  onChange={handleaddpassword}/>
        <div> Email </div>
        <input type="text"  onChange={handleaddemail}/>
        <div> Phone </div>
        <input type="text"  onChange={handleaddphone}/>
        <div> Parent name </div>
        <input type="text"  onChange={handleaddp_name}/>
        <div> Parent phone </div>
        <input type="text"  onChange={handleaddp_phone}/>
        <div> Role_id </div>
        <input type="text"  onChange={handleaddrole_id}/>
        <button onClick={handlecreateuser}>Hozzáadás</button>


        <div className="scrollable-table">
        <table className="adminpage-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>student_id</th>
              <th>weeklyspecial_id</th>
              
              
            </tr>
          </thead>
          <tbody>
            {cancelation.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.user_id}</td>
                <td>{user.weeklyspecial_id}</td>

              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div><b> Cancelation törlése </b></div>
        <div> ID megadása a Cancelation törléséhez: </div>
        <input type="text"  onChange={handlecanceldelete}/>
        <button onClick={handleDeletioncancelation}>Törlés</button>

        <div className="scrollable-table">
        <table className="adminpage-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>breakfast</th>
              <th>lunch</th>
              <th>dinner</th>
              <th>day</th>
              
            </tr>
          </thead>
          <tbody>
            {weeklyspecial.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.breakfast}</td>
                <td>{user.lunch}</td>
                <td>{user.dinner}</td>
                <td>{user.day}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div><b> breakfast változtatása </b></div>
        <div> ID megadása a breakfast módosításához: </div>
        <input type="text"  onChange={handlebreakfastuserid}/>
        <div> Új breakfast </div>
        <input type="text"  onChange={handlebreakfastchange}/>
        <button onClick={handleChangebreakfast}>Beállítás</button>

        <div><b> lunch változtatása </b></div>
        <div> ID megadása a lunch módosításához: </div>
        <input type="text"  onChange={handlelunchuserid}/>
        <div> Új lunch </div>
        <input type="text"  onChange={handlelunchchange}/>
        <button onClick={handleChangelunch}>Beállítás</button>

        <div><b> dinner változtatása </b></div>
        <div> ID megadása dinner módosításához: </div>
        <input type="text"  onChange={handledinneruserid}/>
        <div> Új dinner </div>
        <input type="text"  onChange={handledinnerchange}/>
        <button onClick={handleChangedinner}>Beállítás</button>

        <div><b> day változtatása </b></div>
        <div> ID megadása a day módosításához: </div>
        <input type="text"  onChange={handledayuserid}/>
        <div> Új day </div>
        <input type="text"  onChange={handledaychange}/>
        <button onClick={handleChangeday}>Beállítás</button>






    </div>
    )
}