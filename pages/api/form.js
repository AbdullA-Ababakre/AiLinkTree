import fs from "fs";

const filePath = "./data/form.json";

// const writeFile = (val, req, res) => {
//   let existingData;
//   let mergedData;

//   if (fs.readFileSync(filePath, "utf-8")) {
//     existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//   }
//   mergedData = { ...existingData, ...val };

//   fs.writeFileSync(filePath, JSON.stringify(mergedData), (err) => {
//     if (err) {
//       res.status(500).json({ message: "Error saving data" });
//       return;
//     }

//     res.status(200).json({ message: "Data saved successfully!" });
//   });
// };

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { backgroundForm, interestsForm, beliefsForm } = req.body;

//     if (backgroundForm) {
//       fs.writeFileSync(filePath, JSON.stringify(backgroundForm), (err) => {
//         if (err) {
//           res.status(500).json({ message: "Error saving data" });
//           return;
//         }

//         res.status(200).json({ message: "Data saved successfully!" });
//       });
//     } else if (interestsForm) {
//       const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//       const mergedData = { ...existingData, ...interestsForm };
//       fs.writeFileSync(filePath, JSON.stringify(mergedData), (err) => {
//         if (err) {
//           res.status(500).json({ message: "Error saving data" });
//           return;
//         }

//         res.status(200).json({ message: "Data saved successfully!" });
//       });
//     } else if (beliefsForm) {
//       const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//       const mergedData = { ...existingData, ...beliefsForm };
//       fs.writeFileSync(filePath, JSON.stringify(mergedData), (err) => {
//         if (err) {
//           res.status(500).json({ message: "Error saving data" });
//           return;
//         }

//         res.status(200).json({ message: "Data saved successfully!" });
//       });
//     }
//   } else {
//     res.status(405).json({ message: "Only POST is allowed" });
//   }
// }

export default async function handler(req, res) {
  if (req.method === "POST") {
    // const filePath = 'data.json'; // Replace with your desired file path

    try {
      const { backgroundForm, interestsForm, beliefsForm } = req.body;

      if (backgroundForm || interestsForm || beliefsForm) {
        // Read existing data (if any)
        let existingData = {};

        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, "utf-8");
          if (fileContent.trim() !== "") {
            existingData = JSON.parse(fileContent);
          }
        }

        // Merge the new data with the existing data based on the form type
        let mergedData = existingData;

        if (backgroundForm) {
          mergedData = { ...mergedData, ...backgroundForm };
        }

        if (interestsForm) {
          mergedData = { ...mergedData, ...interestsForm };
        }

        if (beliefsForm) {
          mergedData = { ...mergedData, ...beliefsForm };
        }

        // Write the merged data back to the file
        fs.writeFileSync(filePath, JSON.stringify(mergedData));

        // Respond with a success message
        res.status(200).json({ message: "Data saved successfully!" });
      } else {
        res
          .status(400)
          .json({ message: "Invalid request: No form data provided" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Only POST is allowed" });
  }
}
