/*
 *  VITacademics
 *  Copyright (C) 2015  Karthik Balakrishnan <karthikb351@gmail.com>
 *  Copyright (C) 2015  Aneesh Neelam <neelam.aneesh@gmail.com>
 *  Copyright (C) 2015  Ayush Agarwal <agarwalayush161@gmail.com>
 *  Copyright (C) 2015  Kunal Nagpal <kunagpal@gmail.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

/*
 * DISCLAIMER
 *
 * The following credentials have been included for testing purposes only.
 *
 * Should you have an objection to such use of your details,
 * please open an issue here: https://github.com/aneesh-neelam/VITacademics/issues.
 *
 */

var users = [
  {
    describe: 'B.Tech CSE 4th Year - Project + 1 Course Withdrawl - Vellore',
    reg_no: '11BCE0260',
    dob: '20101993',
    mobile: '9440668991',
    campus: 'vellore'
  },

  /*
   *  Disabled due to lack of proper credentials (Parent's Mobile required for Vellore Campus)
   *
   *  {
   *  describe: 'B.Tech ECE 2nd Year - Courses Only - Vellore',
   *  reg_no: '13BEC0547',
   *  dob: '10011995',
   *  campus: 'vellore'
   *  },
   *  {
   *  describe: 'Research Scholar - Vellore',
   *  reg_no: '14PHI0007',
   *  dob: '05041990',
   *  campus: 'vellore'
   *  },
   *
   */

  {
    describe: 'Master\'s Student - Chennai',
    reg_no: '14MMT1019',
    dob: '19061993',
    campus: 'chennai'
  }
];

module.exports.users = users;
