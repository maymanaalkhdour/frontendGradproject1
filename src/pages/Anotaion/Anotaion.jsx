import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Navbar";
import styles from "./Anotaion.module.css";
import axios from "axios";

function Anotaion() {
  const [imageUrl, setImageUrl] = useState("");
  const [points, setPoints] = useState([]);
  const [annotationText, setAnnotationText] = useState("");
  const [savingAnnotation, setSavingAnnotation] = useState(false);
  const [annotationSaved, setAnnotationSaved] = useState(false);
// const [pointsimage,setPointsImage]=useState({
  // x:0,
  // y:0,
  // 
// 
// })
  
  
  
const handleImageUpload = (e) => {
  const file = e.target.files[0]; // Define file here

  const reader = new FileReader();

  reader.onload = (event) => {
    setImageUrl(event.target.result);
  };

  reader.readAsDataURL(file);
};
  
  
  

  
  

  const handleImageClick = (e) => {
    if (!imageUrl) return;

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - 580;
    const y = e.clientY - rect.top - 160;

    // إضافة النقطة الجديدة إلى المصفوفة
    setPoints([...points, { x, y, text: "" }]);
    setAnnotationText("");
  };
  const mSessionid=localStorage.getItem('mssesionid')
const token= localStorage.getItem('UserToken');

  
  

  

  
  
  
  
const handleSaveAnnotation = () => {
  if (savingAnnotation) return;

  setSavingAnnotation(true);

  const pointsJSON = JSON.stringify(points);
  const formData = new FormData();
  formData.append('imageFile', imageUrl);
  formData.append('points', pointsJSON); // استخدام imageUrl مباشرةً هنا

  axios.post(`http://localhost:5000/api/annotations/${mSessionid}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'token': token
    }
  })
  .then(response => {
    alert("تم الحفظ بنجاح!");
    setSavingAnnotation(false);
    setAnnotationSaved(true);
    setTimeout(() => {
      setAnnotationSaved(false);
    }, 3000);
  })
  .catch(error => {
    console.error('خطأ في حفظ التعليق:', error);
    // alert("حدث خطأ أثناء حفظ التعليق. يرجى التحقق من وحدة التحكم للحصول على مزيد من التفاصيل.");
    setSavingAnnotation(false);
  });
};

  
  

  


  
  
  

  
  

  
  
  
  
  
  
  
  
  

 
  

  
  
  

  
  
  
  

  return (
    <div className={styles.annotation}>
      <Navbar />
      <div className={styles.annotationForm}>
        <label htmlFor="imageFile">Upload Image:</label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {imageUrl && (
          <div className={styles.imageContainer} onClick={handleImageClick}>
            <img
              src={imageUrl}
              alt="Annotated Image"
              style={{ maxWidth: "100%", maxHeight: "90vh" }}
            />
            {points.map((point, index) => (
              <div key={index} style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: point.x,
                    top: point.y,
                    width: "20px",
                    height: "20px",
                    background: "red",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
                {point.text && (
                  <div
                    style={{
                      position: "absolute",
                      left: point.x,
                      top: point.y ,
                      background: "white",
                      padding: "5px",
                      borderRadius: "5px",
                      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
                    }}
                  >
                    {point.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {annotationSaved && <p>Annotation saved successfully!</p>}
        {imageUrl && (
          <div className={styles.annotationArea}>
            <label htmlFor="annotationText">Annotation Text:</label>
            <input
              type="text"
              id="annotationText"
              value={annotationText}
              onChange={(e) => setAnnotationText(e.target.value)}
              placeholder="Enter annotation text"
              style={{ width: "90%" }}
            />
            <button
              className={styles.saveAnnotationBtn}
              onClick={handleSaveAnnotation}
            >
              {savingAnnotation ? "Saving..." : "Save Annotation"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Anotaion;
