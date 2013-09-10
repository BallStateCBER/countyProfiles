/* For each of the 92 counties, an array is provided of the industry IDs for which
 * data is available. */  
var industries = new Array(); 
industries[1] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[3] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[4] = [1, 4, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[5] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[6] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[7] = [1, 2, 4, 5, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[8] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[9] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[10] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[11] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[12] = [1, 2, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[13] = [1, 2, 3, 4, 5, 7, 9, 13, 14, 15, 17, 18, 20, 22, 23];
industries[14] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[15] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[16] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[17] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[18] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[19] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[20] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[21] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[22] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[23] = [1, 2, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[24] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[25] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[26] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[27] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[28] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[29] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[30] = [1, 2, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[31] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[32] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[33] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[34] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[35] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[36] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[37] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[38] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[39] = [1, 2, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[40] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[41] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[42] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[43] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[44] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[45] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[46] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[47] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[48] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[49] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[50] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[51] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[52] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[53] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[54] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[55] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[57] = [1, 2, 3, 4, 5, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[56] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[58] = [1, 2, 4, 5, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[59] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[60] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[61] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[62] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[63] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[64] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[65] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[66] = [1, 2, 3, 4, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[67] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[68] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[69] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[70] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[71] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[72] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[73] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[74] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[75] = [1, 2, 3, 4, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[76] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[77] = [1, 2, 3, 4, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[78] = [1, 2, 3, 4, 5, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[79] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[80] = [1, 2, 4, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[81] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 22, 23];
industries[82] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[83] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[84] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[85] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[86] = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14, 15, 18, 20, 22, 23];
industries[87] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[88] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[89] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[90] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[91] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];
industries[92] = [1, 2, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23];

var counties = new Array();
counties[1] = 'Adams';
counties[2] = 'Allen';
counties[3] = 'Bartholomew';
counties[4] = 'Benton';
counties[5] = 'Blackford';
counties[6] = 'Boone';
counties[7] = 'Brown';
counties[8] = 'Carroll';
counties[9] = 'Cass';
counties[10] = 'Clark';
counties[11] = 'Clay';
counties[12] = 'Clinton';
counties[13] = 'Crawford';
counties[14] = 'Daviess';
counties[15] = 'Dearborn';
counties[16] = 'Decatur';
counties[17] = 'De_Kalb';
counties[18] = 'Delaware';
counties[19] = 'Dubois';
counties[20] = 'Elkhart';
counties[21] = 'Fayette';
counties[22] = 'Floyd';
counties[23] = 'Fountain';
counties[24] = 'Franklin';
counties[25] = 'Fulton';
counties[26] = 'Gibson';
counties[27] = 'Grant';
counties[28] = 'Greene';
counties[29] = 'Hamilton';
counties[30] = 'Hancock';
counties[31] = 'Harrison';
counties[32] = 'Hendricks';
counties[33] = 'Henry';
counties[34] = 'Howard';
counties[35] = 'Huntington';
counties[36] = 'Jackson';
counties[37] = 'Jasper';
counties[38] = 'Jay';
counties[39] = 'Jefferson';
counties[40] = 'Jennings';
counties[41] = 'Johnson';
counties[42] = 'Knox';
counties[43] = 'Kosciusko';
counties[44] = 'La_Grange';
counties[45] = 'Lake';
counties[46] = 'La_Porte';
counties[47] = 'Lawrence';
counties[48] = 'Madison';
counties[49] = 'Marion';
counties[50] = 'Marshall';
counties[51] = 'Martin';
counties[52] = 'Miami';
counties[53] = 'Monroe';
counties[54] = 'Montgomery';
counties[55] = 'Morgan';
counties[56] = 'Noble';
counties[57] = 'Newton';
counties[58] = 'Ohio';
counties[59] = 'Orange';
counties[60] = 'Owen';
counties[61] = 'Parke';
counties[62] = 'Perry';
counties[63] = 'Pike';
counties[64] = 'Porter';
counties[65] = 'Posey';
counties[66] = 'Pulaski';
counties[67] = 'Putnam';
counties[68] = 'Randolph';
counties[69] = 'Ripley';
counties[70] = 'Rush';
counties[71] = 'St_Joseph';
counties[72] = 'Scott';
counties[73] = 'Shelby';
counties[74] = 'Spencer';
counties[75] = 'Starke';
counties[76] = 'Steuben';
counties[77] = 'Sullivan';
counties[78] = 'Switzerland';
counties[79] = 'Tippecanoe';
counties[80] = 'Tipton';
counties[81] = 'Union';
counties[82] = 'Vanderburgh';
counties[83] = 'Vermillion';
counties[84] = 'Vigo';
counties[85] = 'Wabash';
counties[86] = 'Warren';
counties[87] = 'Warrick';
counties[88] = 'Washington';
counties[89] = 'Wayne';
counties[90] = 'Wells';
counties[91] = 'White';
counties[92] = 'Whitley';