import Link from "next/link";

const ResourcesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">
            CDC Preparation Resources
          </h1>
          <p className="text-lg text-gray-700 text-center">Part 1</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">ML/DL/AI/Data:</h2>
    <ol class="list-decimal pl-6">
      <li class="mb-2">
        Revise C and learn C++/Java & Python. Practice a lot. It will
        help in the long run. If possible, try to learn R but only
        after Python.
      </li>
      <li class="mb-2">Complete Analytics Edge by edX.</li>
      <li class="mb-2">
        Complete the ‘Machine Learning course by Andrew NG available
        on Coursera or Youtube.
      </li>
      <li class="mb-2">
        Complete Five modules of deeplearning.ai (
        <a
          href="https://www.deeplearning.ai"
          class="text-blue-500"
          target="_blank"
          style={{"word-break": "break-all"}}
        >
          https://www.deeplearning.ai
        </a>
        ). Check it out; its really a good one. Its also available on
        YouTube.
      </li>
      <li class="mb-2">
        You can learn Data Science at DataCamp at your own pace using
        the free 3-month individual subscription through the Github
        Student Developer Pack.
      </li>
      <li class="mb-2">
        Create an account on Kaggle and take courses on Data Analytics
        there.
      </li>
      <li>
        Create an account on Analytics Vidhya. They keep updating
        about various competitions happening throughout the year.
      </li>
    </ol>
  </div>
</div>


        <div class="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 class="text-2xl font-bold mb-4">Machine Learning Tips</h2>
          <p class="mb-2">Supply Chain/Finance/Consultancy/UPSC/Others</p>
          <p class="mb-2">Special Thanks to Communique for these resources:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">
              Consulting -
              <a
                href="https://drive.google.com/drive/folders/13gQTOTMILNmUbKKOs4ION5moWQc0jFyJ?usp=sharing"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/drive/folders/13gQTOTMILNmUbKKOs4ION5moWQc0jFyJ?usp=sharing
              </a>
            </li>
            <li class="mb-2">
              Case Books by different B Schools like ISB, IIM-A, IIM-C, IIM-L
              etc.
            </li>
            <li class="mb-2">Supply Chain Management by Chopra and Meindl</li>
            <li class="mb-2">Group Discussion Prep Videos on Youtube</li>
            <li class="mb-2">
              <a
                href="https://drive.google.com/drive/folders/1_OFukZe8GmWPSS9g5ita84GCV0NF4SPw?usp=sharing"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/drive/folders/1_OFukZe8GmWPSS9g5ita84GCV0NF4SPw?usp=sharing
              </a>
            </li>
            <li class="mb-2">Cracking the Campus PM Interview</li>
            <li class="mb-2">Product Management Resources</li>
            <li class="mb-2">Level 1 Books of CFA/FRM</li>
            <li class="mb-2">
              Options, Futures and Other Derivatives by John C. Hull
            </li>
            <li class="mb-2">Finding Alphas by Tulchinsky</li>
            <li class="mb-2">Aptitude Questions and Puzzles on Gfg</li>
            <li class="mb-2">
              Investopedia -
              <a
                href="https://drive.google.com/open?id=1aYZmvtHI7GWk124gQrE4Mp07soYJdS6Y"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/open?id=1aYZmvtHI7GWk124gQrE4Mp07soYJdS6Y
              </a>
            </li>
            <li class="mb-2">
              Soft Skills for Interview Preparation by Communique:
              <a
                href="https://drive.google.com/file/d/1yaVNZOZM8c8kxDgTU8AJqmxgORz0q-0s/view?usp=sharing"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/file/d/1yaVNZOZM8c8kxDgTU8AJqmxgORz0q-0s/view?usp=sharing
              </a>
            </li>
            <li class="mb-2">
              Zerodha Varsity -
              <a
                href="https://drive.google.com/folderview?id=1_jOIFqHc7B4iFhjsxtIkJSbyGUWWWnvq"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/folderview?id=1_jOIFqHc7B4iFhjsxtIkJSbyGUWWWnvq
              </a>
            </li>
            <li class="mb-2">
              Virtual Stock Markets -
              <a
                href="https://drive.google.com/file/d/1-kFJK4NhE0IITkEQGLZhkd2s6cWHLnvr/view?usp=drivesdk"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/file/d/1-kFJK4NhE0IITkEQGLZhkd2s6cWHLnvr/view?usp=drivesdk
              </a>
            </li>
            <li class="mb-2">
              Consulting Fundae -
              <a
                href="https://drive.google.com/file/d/1oVSuqyKMbRwQDRepD-CaxQ63nbBDVv_M/view?usp=drivesdk"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/file/d/1oVSuqyKMbRwQDRepD-CaxQ63nbBDVv_M/view?usp=drivesdk
              </a>
            </li>
            <li class="mb-2">
              KGP Life Fundae -
              <a
                href="https://drive.google.com/file/d/1kBlD7nzxGPMzzHP90bFhnTmnKHmdVo5M/view?usp=drivesdk"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/file/d/1kBlD7nzxGPMzzHP90bFhnTmnKHmdVo5M/view?usp=drivesdk
              </a>
            </li>
          </ul>

          <p class="mt-4">
            For those working in research groups, do your project well. You
            people will have a higher chance to make it to Inter IIT tech meet
            in years to come. Your learnings will help you a lot as an
            individual & also for the Institute.
          </p>
          <p>
            For those who are interning somewhere, please work diligently as
            your rise in the learning curve, knowledge base, & growth should be
            your utmost priority. Always keep in mind that you represent your
            institute at the organization you are working with & you can’t let
            it down.
          </p>
          <p>
            Apart from this, revise your concepts of Mathematics 1 & Mathematics
            2 taught in your first year. It helps a lot. Try to learn a new
            language. You may use ‘Duolingo’ for the same. Its a fantastic
            application. Try to learn a musical instrument if possible. It acts
            as a stress-buster in difficult times. Play any sport. As you are at
            home, try to improvise your biological clock. Stay healthy and
            happy.
          </p>
        </div>

        <div class="bg-white p-6 flex-col rounded-lg shadow-md mt-4 whitespace-normal">
          <h2 class="text-2xl font-bold mb-4">Part 2</h2>
          <p>
            This Guide is not exhaustive but just a brief overview of how you
            can start with the preparation. Take your time and decide what field
            you are planning to target.
          </p>
          <p>
            If its a software profile that you are targeting then start doing
            questions from interview bit or geeks for geeks. Try doing all the
            questions from this link by the start of the next academic year. (
            <a
              href="https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/"
              class="text-blue-500"
              target="_blank"
              style={{"word-break": "break-all"}}
            >
              https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
            </a>
            )
          </p>
          <p>
            Consult seniors who got an internship in a software profile for
            better preparation methodology. Again for core profiles, seniors of
            that field are the ones who can actually help you.
          </p>
          <p>
            Now, if you are targeting any Finance/Analyst profile then the
            following points are a must.
          </p>
          <p>Probability & Statistics:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">
              Complete all the questions from 50 challenging problems in
              probability
            </li>
            <li class="mb-2">
              If you want to study the theory through videos then follow these
              lecture, of course, Stats 110 (
              <a
                href="https://projects.iq.harvard.edu/stat110/home"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://projects.iq.harvard.edu/stat110/home
              </a>
              )
            </li>
            <li class="mb-2">
              If you are a book person then follow the Prob & Stats book by
              Montgomery
            </li>
            <li class="mb-2">
              Dice Problems -
              <a
                href="https://www.madandmoonly.com/doctormatt/mathematics/dice1.pdf"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://www.madandmoonly.com/doctormatt/mathematics/dice1.pdf
              </a>
            </li>
          </ul>
          <p>For Puzzles:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Heard on the Street is a must-do book</li>
            <li class="mb-2">
              If you get additional time and want to leave no stone unturned
              then do questions from these links too.
            </li>
            <li class="mb-2">Brainstellar</li>
            <li class="mb-2">
              Geeks for Geeks Puzzles:
              <a
                href="https://www.geeksforgeeks.org/category/puzzles/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
            <li class="mb-2">
              Interview-bit Puzzles:
              <a
                href="https://www.interviewbit.com/courses/programming/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
          </ul>
          <p>Quant: Resources by Quant Cub, IIT Kharagpur</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">
              <a
                href="https://docs.google.com/document/d/1E41DRSDA-tbdzsBh7L9a20msxwLhgwhC2Vz96Obri3Y/edit"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://docs.google.com/document/d/1E41DRSDA-tbdzsBh7L9a20msxwLhgwhC2Vz96Obri3Y/edit
              </a>
            </li>
          </ul>
          <p>Resources by Code Club IIT Kharagpur:-</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Must Read for Software Profile</li>
            {/* <li class="mb-2 whitespace-normal">
              <a
                href="https://medium.com/@ish.ranga11/the-8-month-plan-to-get-an-internship-in-your-dream-company-8195e419726a%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1712388014618020%26amp;usg%3DAOvVaw1EzsByLsj7e9JQoND77v7S&sa=D&source=docs&ust=1712388014642347&usg=AOvVaw3xY5Q6u5v04TuD58aO6FVq"
                class="text-blue-500 "
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://medium.com/@ish.ranga11/the-8-month-plan-to-get-an-internship-in-your-dream-company-8195e419726a%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1712388014618020%26amp;usg%3DAOvVaw1EzsByLsj7e9JQoND77v7S&sa=D&source=docs&ust=1712388014642347&usg=AOvVaw3xY5Q6u5v04TuD58aO6FVq
              </a>
            </li> */}
            <li class="mb-2">Reading material for Software/Quant Profiles</li>
            <li class="mb-2">
              CP:
              <a
                href="https://cp-algorithms.com/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://cp-algorithms.com/
              </a>
            </li>
            <li class="mb-2">
              CP Handbook:
              <a
                href="https://drive.google.com/file/d/1UI_5yAdnDrttxTcrhwQJ8iOZjFRNR8Nr/view?usp=sharing"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://drive.google.com/file/d/1UI_5yAdnDrttxTcrhwQJ8iOZjFRNR8Nr/view?usp=sharing
              </a>
            </li>
            <li class="mb-2">Cracking the Coding Interview Book</li>
            <li class="mb-2">
              DSA:
              <a
                href="https://www.youtube.com/watch?v=zWg7U0OEAoE&list=PLBF3763AF2E1C572F"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://www.youtube.com/watch?v=zWg7U0OEAoE&list=PLBF3763AF2E1C572F
              </a>
            </li>
            <li class="mb-2">Core CS Concepts:</li>
            <li class="mb-2">
              For 3rd yrs: Mainly OOPS asked to 3rd years. Some specific topics
              in OOPS that were asked in 2020 are access modifiers, virtual
              function, overloading vs overriding, encapsulation, abstraction.
              <a
                href="https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/
              </a>
            </li>
            <li class="mb-2">
              For 4th yrs: 4th years need to mainly focus on OOPS, OS, and
              Networks. A more thorough preparation might include DBMS as well.
              The portions covered in the academics are more than enough to be
              decently prepared.
            </li>
            <li class="mb-2">
              ML: Mostly questions from traditional ML and prob stats are asked.
              Understanding the classical ML techniques and their intuition is
              necessary. Domain-specific questions are also asked mainly based
              on your resume, so make sure you have a good understanding of your
              intern projects, papers, etc.
            </li>
            <li class="mb-2">
              Code Readability:
              <a
                href="http://personal.denison.edu/~havill/style.pdf?fbclid=IwAR1BtDQGJQBm1z0TYLjyos2sFGdrAAH_9pUelrrl5v-1A8cP2RNA9ZE2bFs"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                http://personal.denison.edu/~havill/style.pdf?fbclid=IwAR1BtDQGJQBm1z0TYLjyos2sFGdrAAH_9pUelrrl5v-1A8cP2RNA9ZE2bFs
              </a>
            </li>
            <li class="mb-2">
              Practice: Grimoire of Code CDC Prep Tests, Prepleaf Mocks,
              Interviewbit etc.
            </li>
            <li class="mb-2">Topic Wise for coding:</li>
            <li class="mb-2">
              Binary Search (fairly imp):
              <a
                href="https://www.topcoder.com/community/competitive-programming/tutorials/binary-search"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://www.topcoder.com/community/competitive-programming/tutorials/binary-search
              </a>
            </li>
            <li class="mb-2">STL (very imp)</li>
            <li class="mb-2">
              Bit manipulation (very imp):
              <a
                href="https://www.geeksforgeeks.org/bits-manipulation-important-tactics/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://www.geeksforgeeks.org/bits-manipulation-important-tactics/
              </a>
            </li>
            <li class="mb-2 whitespace-normal">
              Maths (not much asked):
              <a
                href="https://docs.google.com/document/d/1VVxbGtPR6eNM8AMFv5VYX8S_k1Ksh3VfiihmqavdW5Q/edit?usp=sharing"
                class="text-blue-500 whitespace-normal block"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://docs.google.com/document/d/1VVxbGtPR6eNM8AMFv5VYX8S_k1Ksh3VfiihmqavdW5Q/edit?usp=sharing
              </a>
            </li>
            <li class="mb-2">
              DP (very imp):
              <a
                href="https://docs.google.com/document/d/1MdZlrGHEmIUtrhDDjpguTH-dzytA_MNScCEwPSETHTQ/edit"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://docs.google.com/document/d/1MdZlrGHEmIUtrhDDjpguTH-dzytA_MNScCEwPSETHTQ/edit
              </a>
              Can refer to
              <a
                href="https://cp-algorithms.com/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://cp-algorithms.com/
              </a>
              <a
                href="https://www.interviewbit.com/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://www.interviewbit.com/
              </a>
              has a good section on DP.
            </li>
            <li class="mb-2">
              Graphs (very imp) Can refer to
              <a
                href="https://cp-algorithms.com/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://cp-algorithms.com/
              </a>
            </li>
            <li class="mb-2">
              DP on trees(imp):
              <a
                href="https://codeforces.com/blog/entry/20935"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://codeforces.com/blog/entry/20935
              </a>
            </li>
            <li class="mb-2">Practice problems</li>
            <li class="mb-2">
              Codemonk:
              <a
                href="https://www.hackerearth.com/practice/codemonk/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://www.hackerearth.com/practice/codemonk/
              </a>
            </li>
            <li class="mb-2">
              A20J
              <a
                href="https://a2oj.com/ladders"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://a2oj.com/ladders
              </a>
            </li>
            <li class="mb-2 whitespace-normal ">
  Topic-wise:
  <a
    href="https://docs.google.com/document/d/1z0Mh7F0dxMVWX2u6WEHWRYqrC4kCXyJ4KEHTkkVYdu8/edit"
    class="text-blue-500 block "
    target="_blank"
    style={{"word-break": "break-all"}}
  >
    https://docs.google.com/document/d/1z0Mh7F0dxMVWX2u6WEHWRYqrC4kCXyJ4KEHTkkVYdu8/edit
  </a>
</li>

            <li class="mb-2 whitespace-normal ">
              LeetCode Practice:
              <a
                href="https://docs.google.com/spreadsheets/d/1L3cvv0jOKN5hh8GI7iGKG8vmQe81bOi4dBKuFV1uUss/edit#gid=1177592695"
                class="text-blue-500 block"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                https://docs.google.com/spreadsheets/d/1L3cvv0jOKN5hh8GI7iGKG8vmQe81bOi4dBKuFV1uUss/edit#gid=1177592695
              </a>
            </li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 class="text-2xl font-bold mb-4">Interview Resources</h2>
          <p>Tips for interview:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">
              <a
                href="https://m.facebook.com/ishan.ranga/posts/3264412863648431"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
            <li class="mb-2">
              <a
                href="https://docs.google.com/document/d/1o4_uJrPaah-roIQjxI2G9Uu02Y6kQ4PH7RymENy2pl4/edit"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
          </ul>
          <p>Experiences:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Communiqué IIT KGP – Medium</li>
            <li class="mb-2">
              <a
                href="https://www.linkedin.com/posts/abhishek8899_internship-interview-experience-abhishek-activity-6691662512074690560-xCgR/"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
            <li class="mb-2">
              <a
                href="https://codeclub-iitkgp.medium.com/interview-blogs-archive-7849828ed381"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
            <li class="mb-2">
              <a
                href="https://nitinkgp23.github.io/2020/09/23/A-to-Z-guide-to-your-campus-placements/?fbclid=IwAR3pH6HZ4KCA-DyquhbabRXttGhRH00zIhxo8jg8_Kn-GAp9xpFO5NbImWk"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
          </ul>
          <p>Some More Resources on Github:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">
              <a
                href="https://github.com/jnikhilreddy/Competitive-programming-resources?fbclid%253DIwAR2rJ9ta9elC-H_HQUB2rKaMb6eJKUJw63nU11CYGlavpM0kN6NDYqoYDOQ%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1712388014624777%26amp;usg%3DAOvVaw0GroMUq1DLhw39rl_wcLTB&sa=D&source=docs&ust=1712388014644410&usg=AOvVaw3kgSMtW2B69gN8v_Fs2nvS"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
            <li class="mb-2">
              <a
                href="https://github.com/lnishan/awesome-competitive-programming?fbclid%253DIwAR2Wucce017r91pb_hLyOeuQGDhF3i8cVcVAUJtE3tIZP5hxev-FBdZvTpM%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1712388014624777%26amp;usg%3DAOvVaw3xY5Q6u5v04TuD58aO6FVq&sa=D&source=docs&ust=1712388014644410&usg=AOvVaw3xY5Q6u5v04TuD58aO6FVq"
                class="text-blue-500"
                target="_blank"
                style={{"word-break": "break-all"}}
              >
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
