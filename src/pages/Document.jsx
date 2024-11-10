import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const documentList = [
  { id: 1, name: "demande de diplome", documentattachment: "carte de stagiaire" },
  { id: 2, name: "Attestation de fin de formation", documentattachment: "" },
  { id: 3, name: "Relevé de notes", documentattachment: "carte de stagiaire" },
  { id: 4, name: "Certificat de stage", documentattachment: "" },
  { id: 5, name: "Demande de stage", documentattachment: "" },
  { id: 6, name: "Conventions de stage", documentattachment: "" },
  { id: 7, name: "Demande de remboursement", documentattachment: "" },
  { id: 8, name: "Carte d'identité ou de stagiaire", documentattachment: "certificat d'inscription" },
  { id: 9, name: "Demande de diplôme ou de certificat", documentattachment: "carte de stagiaire" },
  { id: 10, name: "Attestation de stage de fin d'études", documentattachment: "" },
  { id: 11, name: "Demande d'absence", documentattachment: "Fichier pour l'absence" },
];

const statusOptions = [
  { id: "pending", label: "Pending", color: "text-yellow-500" },
  { id: "processed", label: "Processed", color: "text-green-500" },
  { id: "rejected", label: "Rejected", color: "text-red-500" },
];

const DocumentRequest = () => {
  const [selectedDocument, setSelectedDocument] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [requestHistory, setRequestHistory] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleRequestSubmit = () => {
    const newRequest = {
      id: requestHistory.length + 1,
      document: selectedDocument,
      date: requestDate,
      status: "pending",
    };

    setRequestHistory([newRequest, ...requestHistory]);
    setSelectedDocument("");
    setRequestDate("");
    setUploadedFiles([]);
  };

  const handleFileUpload = (e) => {
    setUploadedFiles([...e.target.files]);
  };

  return (
    <div className="bg-white dark:bg-[#34495E] p-6 rounded-lg shadow-lg space-y-6 min-h-screen">
      <h2 className="text-3xl font-semibold text-black dark:text-[#96C9F4] mb-6">Request a Document</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="document" className="text-lg text-black dark:text-white mb-2">
            Select Document
          </label>
          <select
            id="document"
            value={selectedDocument}
            onChange={(e) => setSelectedDocument(e.target.value)}
            className="p-3 bg-gray-100 dark:bg-[#2C3E50] text-black dark:text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#3FA2F6]">
            <option value="" disabled>Select a document</option>
            {documentList.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-lg text-black dark:text-white mb-2">
            Select Date
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-[#2C3E50] p-3 rounded-md shadow-md">
            <FaCalendarAlt className="text-[#96C9F4] mr-3" />
            <input
              type="date"
              id="date"
              value={requestDate}
              onChange={(e) => setRequestDate(e.target.value)}
              className="bg-gray-100 dark:bg-[#2C3E50] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3FA2F6] rounded-md p-2"
            />
          </div>
        </div>

        <div className={`flex flex-col ${!selectedDocument || !documentList.find(doc => doc.name === selectedDocument).documentattachment ? 'hidden' : ''}`}>
          <label htmlFor="document-attachment" className="text-lg text-black dark:text-white mb-2">
            Document Attachment
          </label>
          {selectedDocument && documentList.find(doc => doc.name === selectedDocument).documentattachment && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Please attach <span className="font-bold">{documentList.find(doc => doc.name === selectedDocument).documentattachment}</span>
            </p>
          )}
          
          <input
            type="file"
            id="document-attachment"
            className="bg-gray-100 border-spacing-4 dark:bg-[#2C3E50] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3FA2F6] rounded-md p-2"
            multiple
            disabled={!selectedDocument || !documentList.find(doc => doc.name === selectedDocument).documentattachment}
            onChange={handleFileUpload}
          />
          {uploadedFiles.length > 0 && (
            <div className="mt-3">
              <h4 className="text-lg text-black dark:text-white mb-2">Uploaded Files:</h4>
              <ul className="list-disc ml-5">
                {uploadedFiles.map((file, index) => (
                  <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={handleRequestSubmit}
          className="w-full py-2 text-white bg-[#3FA2F6] hover:bg-[#0F67B1] rounded-lg focus:outline-none transition duration-200 ease-in-out"
          disabled={!selectedDocument || !requestDate}
        >
          Submit Request
        </button>
      </div>

      <div className="mt-8 ">
        <h3 className="text-2xl font-semibold text-black dark:text-[#96C9F4] ">Request History</h3>
        <div className="space-y-4 mt-4">
          {requestHistory.length > 0 ? (
            requestHistory.map((request) => (
              <div
                key={request.id}
                className="bg-gray-100 dark:bg-[#34495E] p-4 rounded-lg shadow-md flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-lg text-black dark:text-white font-semibold">{request.document}</span>
                  <span className="text-sm text-gray-400">Requested on: {new Date(request.date).toLocaleDateString()}</span>
                </div>
                <span className={`text-sm ${statusOptions.find(status => status.id === request.status).color}`}>
                  {statusOptions.find(status => status.id === request.status).label}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No requests yet. Submit your first document request!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentRequest;

