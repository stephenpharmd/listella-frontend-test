## Front-End Coding Test

Thanks for taking the time to try out our coding challenge. Since we don't do a lot of whiteboarding during the interview process we've found take-home problems to be the best way for you to show us your skills. This gives you the chance to think about the problem, solve it when you feel comfortable, and focus on the areas you think are important. This challenge should take you 3 - 4 hours on the keyboard, but we encourage you to read the problem description and take some time to think about your solution before you dive into it :)

### Overview

At Listella we deal with large amounts of image files associated with property listings. Each listing can have upwards of 100+ associated files and metadata. The ability to store and present these in near real-time over a web interface is extremely important. 

The objective of this assignment is to create your own image reordering library in raw typescript, published to npm, and imported into a basic react application that allows the user to upload multiple images at a time and drag to reorder.

The "uploaded" images can just be stored in state, no need to send them to any storage bucket or api.

Make sure to account for scale, how will this work with a few images vs how it works with 50+ and what are optimizations that you can make to improve performance and experience.


### Scoring


<table>
  <tr>
   <td>Basics
   </td>
   <td>Does your application build? Does it read and write data in the way we'd like it to? Is it properly formatted?
   </td>
  </tr>
  <tr>
   <td>Completeness
   </td>
   <td>Do you handle all cases? What types of files and metadata are handled? Why were those chosen? Try to cover as much as you can
   </td>
  </tr>
  <tr>
   <td>Error Handling
   </td>
   <td>How are you handling edge cases? What happens when errors occur? What choices have you made to deal with potential error causes and states?
   </td>
  </tr>
  <tr>
   <td>Efficiency
   </td>
   <td>What limitations are placed on size or type? How have you optimized for large file handling?
   </td>
  </tr>
  <tr>
   <td>Maintainability
   </td>
   <td>In this case clean code is more important than efficient code because humans will have to read and review your code without an opportunity for
<p>
you to explain it. Inefficient code can often be improved if it is correct and highly maintainable
   </td>
  </tr>
  <tr>
   <td>Safety and Robustness
   </td>
   <td>How are you handling potentially unsafe access and data inputs? 
   </td>
  </tr>
</table>


Your solution will be scored using a combination of automated and manual scoring. Automated

scoring will be used to run your solution against a handful of sample inputs, comparing the

resulting output. If our automatic test suite passes, manual scoring will be used for everything

else. At Listella we care about clean, correct, safe, and efficient code.



### Resources

* (Sample images)[[https://drive.google.com/drive/folders/12sjuy5GB14-ypGLRdcHhrVuX8EZlbxM2?usp=share_link](https://drive.google.com/drive/folders/12sjuy5GB14-ypGLRdcHhrVuX8EZlbxM2?usp=share_link)] 


### Submission

Please fork the following repository and make your repo private, when complete add `listellaeng` as a collaborator and email us with a link to the private repository.

