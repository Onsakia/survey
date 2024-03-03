import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';


const json = {

        "logoPosition": "right",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "multipletext",
            "name": "question1",
            "state": "expanded",
            "title": "Stakeholder Information ",
            "items": [
             {
              "name": "text1",
              "title": "Organization Name"
             },
             {
              "name": "text2",
              "title": "Country Name"
             },
             {
              "name": "text3",
              "title": "Organization Email Address"
             },
             {
              "name": "text4",
              "title": "Website Url"
             },
             {
              "name": "text5",
              "title": "Name of Contact Person"
             },
             {
              "name": "text6",
              "title": "Title of Contact Pearson"
             },
             {
              "name": "text7",
              "title": "Contact Person Email Address"
             }
            ],
            "colCount": 2
           },
           {
            "type": "checkbox",
            "name": "question2",
            "state": "expanded",
            "title": "The unified MEL System will support the formulation of climate policy-aligned actions while addressing the roles of NPS in the following areas. Please select or add thematic areas your organization considers critical.",
            "showCommentArea": true,
            "choices": [
             {
              "value": "Item 1",
              "text": "Global Stock Take (GST)"
             },
             {
              "value": "Item 2",
              "text": "Global Goal on Adaptation (GGA)"
             },
             {
              "value": "Item 3",
              "text": "Sharma Sheikh Adaptation Agenda "
             },
             {
              "value": "Item 4",
              "text": "UAE Framework on Global Climate Resilience"
             },
             {
              "value": "Item 5",
              "text": "National and regional policies NAPS and NDCs"
             }
            ],
            "showNoneItem": true,
            "colCount": 2,
            "showSelectAllItem": true
           },
           {
            "type": "rating",
            "name": "question3",
            "state": "expanded",
            "title": "Please rate the importance of proper institutional arrangements at local, national, and regional levels in establishing a robust M&E system.",
            "rateCount": 10,
            "rateMax": 10
           },
           {
            "type": "matrix",
            "name": "question4a",
            "state": "expanded",
            "title": "Please indicate your involvement in the climate actions in the following themes",
            "alternateRows": true,
            "columns": [
             {
              "value": "Column 1",
              "text": "Strong"
             },
             {
              "value": "Column 2",
              "text": "General"
             },
             {
              "value": "Column 3",
              "text": "Least"
             },
             {
              "value": "Column 4",
              "text": "None"
             },
             {
              "value": "Column 5",
              "text": "Future Plan"
             }
            ],
            "rows": [
             {
              "value": "Row 1",
              "text": "Nature"
             },
             {
              "value": "Row 2",
              "text": "Social"
             },
             {
              "value": "Row 3",
              "text": "Infrastructures"
             },
             {
              "value": "Row 4",
              "text": "Financing"
             },
             {
              "value": "Row 5",
              "text": "Research"
             },
             {
              "value": "Row 6",
              "text": "Capacity Building"
             },
             {
              "value": "Row 7",
              "text": "Health"
             },
             {
              "value": "Row 8",
              "text": "Food"
             },
             {
              "value": "Row 9",
              "text": "Agriculture"
             },
             {
              "value": "Row 10",
              "text": "Biodiversity"
             },
             {
              "value": "Row 11",
              "text": "Policy"
             },
             {
              "value": "Row 12",
              "text": "Technology"
             }



             
            ]
           }
          ],
          
          "title": "Introduction",
          "description": "a general question which I also repeat below: is this 'unified system' defined before respondants are asked to answer the survey? otherwise they would get confused"
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "html",
            "name": "question14"
           },
           {
            "type": "text",
            "name": "question5",
            "title": "Please list any dedicated tools you are using in data collection, analysis, and data management tools, metrics, and good M&E practices – examples excel, database, or online data collection tools such as Kobo toolbox etc."
           },
           {
            "type": "text",
            "name": "question6",
            "title": "Please list any dedicated metrics and or indicators you are using in M&E of adaptation climate actions – examples people, land area, gender, monetary value, other quantitative or qualitative measure, etc.\n"
           },
           {
            "type": "matrix",
            "name": "question7",
            "state": "expanded",
            "title": "Do you agree or disagree to the following tools, methods and or strategies for improving M&E of the adaptation and resilience climate actions?",
            "alternateRows": true,
            "columns": [
             {
              "value": "Column 1",
              "text": "Strongly Agree"
             },
             {
              "value": "Column 2",
              "text": "Agree"
             },
             {
              "value": "Column 3",
              "text": "Neutral"
             },
             {
              "value": "Column 4",
              "text": "Disagree"
             },
             {
              "value": "Column 5",
              "text": "Strongly Disagree"
             }
            ],
            "rows": [
             {
              "value": "Row 1",
              "text": "Adaptation Data Hub"
             },
             {
              "value": "Row 2",
              "text": "Geospatial Technology"
             },
             {
              "value": "Row 3",
              "text": "Artificial Intelligence"
             }
            ]
           },
           {
            "type": "text",
            "name": "question8",
            "title": "Please suggest or comment on the need for a harmonized methodology for aggregation and validation of locally implemented actions to the national, regional, and global outlook.\n"
           },
           {
            "type": "dropdown",
            "name": "question15",
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ]
           },
           {
            "type": "checkbox",
            "name": "question16",
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ]
           },
           {
            "type": "rating",
            "name": "question17"
           },
           {
            "type": "radiogroup",
            "name": "question18",
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ]
           },
           {
            "type": "boolean",
            "name": "question19"
           },
           {
            "type": "ranking",
            "name": "question22",
            "choices": [
             "Item 2",
             "Item 3",
             "Item 4"
            ]
           },
           {
            "type": "ranking",
            "name": "question23",
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ]
           },
           {
            "type": "comment",
            "name": "question25",
            "autoGrow": true
           },
           {
            "type": "dropdown",
            "name": "question26",
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ]
           },
           {
            "type": "tagbox",
            "name": "question27",
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ]
           },
           {
            "type": "paneldynamic",
            "name": "question4"
           }
          ],

          
          "title": "Metrics, Tools, and Best Practices",
          "description": "Which metrics, tools, and practices do you use for M&E? Do you know of other tools and best practices that may be relevant for the sector?"
         }
        ],
        "autoGrowComment": true,
        "showPreviewBeforeComplete": "showAllQuestions",
        "widthMode": "responsive",
        "headerView": "advanced"
       };

      

export default json;
