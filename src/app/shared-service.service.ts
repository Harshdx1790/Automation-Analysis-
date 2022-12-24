import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let data = [
      {
        "ID": 1,
        "country": "France",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 9586,
        "date": "2022-01-10 07:39:49",
        "Quarter": "Q4"
      },
      {
        "ID": 2,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 999,
        "date": "2022-08-12 08:21:12",
        "Quarter": "Q2"
      },
      {
        "ID": 3,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 17783,
        "date": "2023-12-18 20:06:50",
        "Quarter": "Q3"
      },
      {
        "ID": 4,
        "country": "France",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 6730,
        "date": "2023-06-12 05:11:55",
        "Quarter": "Q2"
      },
      {
        "ID": 5,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 18482,
        "date": "2021-12-25 07:54:45",
        "Quarter": "Q4"
      },
      {
        "ID": 6,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 12210,
        "date": "2023-05-13 09:24:12",
        "Quarter": "Q4"
      },
      {
        "ID": 7,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 9797,
        "date": "2023-06-15 02:11:07",
        "Quarter": "Q3"
      },
      {
        "ID": 8,
        "country": "United Kingdom",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 4084,
        "date": "2022-12-05 19:44:17",
        "Quarter": "Q3"
      },
      {
        "ID": 9,
        "country": "United Kingdom",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 18277,
        "date": "2023-08-19 12:21:32",
        "Quarter": "Q3"
      },
      {
        "ID": 10,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 16241,
        "date": "2022-07-13 00:27:14",
        "Quarter": "Q2"
      },
      {
        "ID": 11,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 9152,
        "date": "2023-05-22 00:40:53",
        "Quarter": "Q4"
      },
      {
        "ID": 12,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 1,
        "date": "2022-09-10 13:54:56",
        "Quarter": "Q3"
      },
      {
        "ID": 13,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 3598,
        "date": "2022-10-29 15:36:40",
        "Quarter": "Q1"
      },
      {
        "ID": 14,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 11324,
        "date": "2023-07-16 22:18:48",
        "Quarter": "Q3"
      },
      {
        "ID": 15,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 17270,
        "date": "2023-04-11 20:30:43",
        "Quarter": "Q2"
      },
      {
        "ID": 16,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 9826,
        "date": "2023-02-21 19:11:23",
        "Quarter": "Q2"
      },
      {
        "ID": 17,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 10964,
        "date": "2022-06-09 15:13:23",
        "Quarter": "Q1"
      },
      {
        "ID": 18,
        "country": "France",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 17366,
        "date": "2023-01-19 09:31:58",
        "Quarter": "Q3"
      },
      {
        "ID": 19,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 19182,
        "date": "2022-08-19 07:08:59",
        "Quarter": "Q1"
      },
      {
        "ID": 20,
        "country": "France",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 9949,
        "date": "2023-12-08 11:58:59",
        "Quarter": "Q1"
      },
      {
        "ID": 21,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 19938,
        "date": "2022-06-30 05:18:22",
        "Quarter": "Q4"
      },
      {
        "ID": 22,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 12676,
        "date": "2022-10-26 04:03:04",
        "Quarter": "Q2"
      },
      {
        "ID": 23,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 833,
        "date": "2022-01-13 16:34:05",
        "Quarter": "Q4"
      },
      {
        "ID": 24,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 12537,
        "date": "2023-02-24 03:07:00",
        "Quarter": "Q4"
      },
      {
        "ID": 25,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 2921,
        "date": "2023-08-15 14:20:59",
        "Quarter": "Q4"
      },
      {
        "ID": 26,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 13108,
        "date": "2023-12-01 12:23:05",
        "Quarter": "Q2"
      },
      {
        "ID": 27,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 1975,
        "date": "2023-02-09 07:34:36",
        "Quarter": "Q4"
      },
      {
        "ID": 28,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 11759,
        "date": "2023-01-03 17:12:11",
        "Quarter": "Q2"
      },
      {
        "ID": 29,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 7195,
        "date": "2021-12-25 15:23:13",
        "Quarter": "Q1"
      },
      {
        "ID": 30,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 12878,
        "date": "2023-04-08 04:14:23",
        "Quarter": "Q2"
      },
      {
        "ID": 31,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 466,
        "date": "2022-08-28 08:04:21",
        "Quarter": "Q2"
      },
      {
        "ID": 32,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 18486,
        "date": "2022-04-26 14:11:40",
        "Quarter": "Q2"
      },
      {
        "ID": 33,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 18200,
        "date": "2022-03-09 12:43:59",
        "Quarter": "Q3"
      },
      {
        "ID": 34,
        "country": "United Kingdom",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 13652,
        "date": "2022-03-30 01:04:48",
        "Quarter": "Q3"
      },
      {
        "ID": 35,
        "country": "United Kingdom",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 7997,
        "date": "2022-05-06 02:21:52",
        "Quarter": "Q1"
      },
      {
        "ID": 36,
        "country": "France",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 17000,
        "date": "2022-03-10 11:02:54",
        "Quarter": "Q3"
      },
      {
        "ID": 37,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 10079,
        "date": "2022-12-21 17:13:46",
        "Quarter": "Q4"
      },
      {
        "ID": 38,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 13587,
        "date": "2023-04-21 10:03:12",
        "Quarter": "Q2"
      },
      {
        "ID": 39,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 9328,
        "date": "2022-01-04 20:09:21",
        "Quarter": "Q2"
      },
      {
        "ID": 40,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 18777,
        "date": "2023-01-27 21:27:08",
        "Quarter": "Q3"
      },
      {
        "ID": 41,
        "country": "France",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 10588,
        "date": "2022-02-10 15:21:13",
        "Quarter": "Q3"
      },
      {
        "ID": 42,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 18388,
        "date": "2023-05-20 04:10:29",
        "Quarter": "Q3"
      },
      {
        "ID": 43,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 13148,
        "date": "2023-08-26 17:38:25",
        "Quarter": "Q4"
      },
      {
        "ID": 44,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 10636,
        "date": "2023-12-19 20:29:44",
        "Quarter": "Q3"
      },
      {
        "ID": 45,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 1663,
        "date": "2023-10-01 07:56:17",
        "Quarter": "Q1"
      },
      {
        "ID": 46,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 11649,
        "date": "2023-02-06 13:08:08",
        "Quarter": "Q2"
      },
      {
        "ID": 47,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 7079,
        "date": "2023-08-12 13:28:30",
        "Quarter": "Q4"
      },
      {
        "ID": 48,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 5945,
        "date": "2022-07-19 06:50:17",
        "Quarter": "Q4"
      },
      {
        "ID": 49,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 13652,
        "date": "2023-06-03 22:37:26",
        "Quarter": "Q4"
      },
      {
        "ID": 50,
        "country": "France",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 17226,
        "date": "2022-09-28 23:35:04",
        "Quarter": "Q1"
      },
      {
        "ID": 51,
        "country": "United Kingdom",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 4694,
        "date": "2023-11-16 03:49:19",
        "Quarter": "Q3"
      },
      {
        "ID": 52,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 5168,
        "date": "2022-02-17 02:19:10",
        "Quarter": "Q4"
      },
      {
        "ID": 53,
        "country": "United Kingdom",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 9000,
        "date": "2023-09-17 22:05:46",
        "Quarter": "Q2"
      },
      {
        "ID": 54,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 862,
        "date": "2023-03-09 08:11:02",
        "Quarter": "Q1"
      },
      {
        "ID": 55,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 369,
        "date": "2022-05-17 08:53:18",
        "Quarter": "Q2"
      },
      {
        "ID": 56,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 19599,
        "date": "2022-06-10 17:10:50",
        "Quarter": "Q4"
      },
      {
        "ID": 57,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 6648,
        "date": "2022-08-17 19:31:35",
        "Quarter": "Q1"
      },
      {
        "ID": 58,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 102,
        "date": "2022-07-02 01:48:26",
        "Quarter": "Q1"
      },
      {
        "ID": 59,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 5807,
        "date": "2022-08-26 10:49:45",
        "Quarter": "Q1"
      },
      {
        "ID": 60,
        "country": "United Kingdom",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 5621,
        "date": "2022-05-28 00:37:27",
        "Quarter": "Q1"
      },
      {
        "ID": 61,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 14668,
        "date": "2022-11-03 03:22:45",
        "Quarter": "Q1"
      },
      {
        "ID": 62,
        "country": "United Kingdom",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 15827,
        "date": "2023-11-29 19:57:09",
        "Quarter": "Q1"
      },
      {
        "ID": 63,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 755,
        "date": "2023-05-02 19:39:58",
        "Quarter": "Q1"
      },
      {
        "ID": 64,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 2085,
        "date": "2023-08-28 02:55:10",
        "Quarter": "Q3"
      },
      {
        "ID": 65,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 13427,
        "date": "2023-03-07 18:48:14",
        "Quarter": "Q3"
      },
      {
        "ID": 66,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 14339,
        "date": "2022-03-30 22:32:25",
        "Quarter": "Q1"
      },
      {
        "ID": 67,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 7138,
        "date": "2023-05-15 12:15:12",
        "Quarter": "Q2"
      },
      {
        "ID": 68,
        "country": "United Kingdom",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 18094,
        "date": "2022-08-20 03:02:57",
        "Quarter": "Q4"
      },
      {
        "ID": 69,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 12841,
        "date": "2023-03-08 17:01:17",
        "Quarter": "Q2"
      },
      {
        "ID": 70,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 15624,
        "date": "2023-05-29 00:41:06",
        "Quarter": "Q3"
      },
      {
        "ID": 71,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 17843,
        "date": "2023-11-08 23:21:42",
        "Quarter": "Q1"
      },
      {
        "ID": 72,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 9925,
        "date": "2023-08-24 12:31:51",
        "Quarter": "Q1"
      },
      {
        "ID": 73,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 6931,
        "date": "2023-02-18 09:18:58",
        "Quarter": "Q1"
      },
      {
        "ID": 74,
        "country": "France",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 5905,
        "date": "2022-11-25 07:55:47",
        "Quarter": "Q3"
      },
      {
        "ID": 75,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 13453,
        "date": "2023-01-13 15:56:38",
        "Quarter": "Q2"
      },
      {
        "ID": 76,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 18277,
        "date": "2023-09-17 17:28:34",
        "Quarter": "Q1"
      },
      {
        "ID": 77,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 10422,
        "date": "2023-10-10 07:34:27",
        "Quarter": "Q1"
      },
      {
        "ID": 78,
        "country": "Italy",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 18465,
        "date": "2022-04-29 20:47:36",
        "Quarter": "Q4"
      },
      {
        "ID": 79,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 7069,
        "date": "2023-11-20 03:52:50",
        "Quarter": "Q3"
      },
      {
        "ID": 80,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 16458,
        "date": "2022-05-17 12:56:06",
        "Quarter": "Q4"
      },
      {
        "ID": 81,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 9970,
        "date": "2023-01-16 23:13:45",
        "Quarter": "Q3"
      },
      {
        "ID": 82,
        "country": "France",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 2968,
        "date": "2022-04-14 05:56:16",
        "Quarter": "Q2"
      },
      {
        "ID": 83,
        "country": "France",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 6746,
        "date": "2023-07-12 15:34:21",
        "Quarter": "Q3"
      },
      {
        "ID": 84,
        "country": "United Kingdom",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 12316,
        "date": "2022-10-15 14:10:30",
        "Quarter": "Q2"
      },
      {
        "ID": 85,
        "country": "Italy",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 13353,
        "date": "2023-09-28 10:54:45",
        "Quarter": "Q4"
      },
      {
        "ID": 86,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 1502,
        "date": "2023-03-10 05:14:55",
        "Quarter": "Q2"
      },
      {
        "ID": 87,
        "country": "Germany",
        "Modal": "Sedan",
        "Vehicle_Type": "EV",
        "Unit": 4928,
        "date": "2022-07-18 16:55:20",
        "Quarter": "Q2"
      },
      {
        "ID": 88,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 17155,
        "date": "2022-01-22 00:04:25",
        "Quarter": "Q3"
      },
      {
        "ID": 89,
        "country": "Germany",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 8536,
        "date": "2022-05-30 21:20:47",
        "Quarter": "Q3"
      },
      {
        "ID": 90,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 17015,
        "date": "2022-08-15 05:27:18",
        "Quarter": "Q1"
      },
      {
        "ID": 91,
        "country": "France",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 2834,
        "date": "2022-01-04 22:02:19",
        "Quarter": "Q4"
      },
      {
        "ID": 92,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 14153,
        "date": "2023-03-30 14:40:50",
        "Quarter": "Q1"
      },
      {
        "ID": 93,
        "country": "United Kingdom",
        "Modal": "Sedan",
        "Vehicle_Type": "Manual",
        "Unit": 5345,
        "date": "2023-11-10 18:04:54",
        "Quarter": "Q1"
      },
      {
        "ID": 94,
        "country": "United Kingdom",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 12339,
        "date": "2022-11-01 01:38:42",
        "Quarter": "Q1"
      },
      {
        "ID": 95,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "Manual",
        "Unit": 1688,
        "date": "2023-02-10 01:52:00",
        "Quarter": "Q1"
      },
      {
        "ID": 96,
        "country": "United Kingdom",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 592,
        "date": "2022-05-28 06:18:38",
        "Quarter": "Q3"
      },
      {
        "ID": 97,
        "country": "United Kingdom",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 5725,
        "date": "2022-03-27 09:22:19",
        "Quarter": "Q2"
      },
      {
        "ID": 98,
        "country": "France",
        "Modal": "XUV",
        "Vehicle_Type": "Manual",
        "Unit": 17375,
        "date": "2022-11-05 18:09:57",
        "Quarter": "Q3"
      },
      {
        "ID": 99,
        "country": "Germany",
        "Modal": "HatchBack",
        "Vehicle_Type": "EV",
        "Unit": 19351,
        "date": "2023-03-23 11:33:33",
        "Quarter": "Q1"
      },
      {
        "ID": 100,
        "country": "Italy",
        "Modal": "XUV",
        "Vehicle_Type": "EV",
        "Unit": 5773,
        "date": "2022-01-01 22:01:21",
        "Quarter": "Q2"
      }
    ]
    
    return {data:data}
  }
  //  getJsonData() {
  //     return this.httpService.get('../../assets/data.json');
  // }
 
}
