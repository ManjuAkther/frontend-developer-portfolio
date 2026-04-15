

const Contact = () => {
  return (
    <div>
        <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-dark mb-4">Get In Touch</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
                <div class="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-12">
                <div class="md:w-1/2 bg-slate-300 p-8 rounded">
                    <form class="space-y-6 ">
                  
                          <div>
                            <label class="block text-gray-700 font-medium mb-2" for="name"></label>
                            <input type="text" name="name" placeholder="name" required/>
                        </div>
                        <div>
                            <label class="block text-gray-700 font-medium mb-2" for="email"></label>
                             <input type="text" name="email" placeholder="email" required/>
                        </div>
                        <div>
                            <label class="block text-gray-700 font-medium mb-2" for="subject"></label>
                            <input type="text" name="subject" placeholder="subject" required/>
                        </div>
                      
                        <div>
                            <label class="block text-gray-700 font-medium mb-2" for="message">Message</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
                
                <div class="md:w-1/2">
                    <div class="bg-teal-200 rounded-xl shadow-lg p-8 h-full">
                        <h3 class="text-xl font-bold text-dark mb-6">Contact Information</h3>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="text-primary text-xl mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark mb-1">Location</h4>
                                    <p class="text-gray-600">Bakalia-ctg</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="text-primary text-xl mr-4 mt-1">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark mb-1">Email</h4>
                                    <p class="text-gray-600">manjuakther47@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="text-primary text-xl mr-4 mt-1">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark mb-1">Phone</h4>
                                    <p class="text-gray-600">01315828296</p>
                                </div>
                            </div>
                            <div class="pt-6">
                                <h4 class="font-bold text-dark mb-4">Follow Me</h4>
                                <div class="flex space-x-6">
                                    <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition duration-300">
                                        <i class="fab fa-github"></i>
                                     
                                    </a>
                                    <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition duration-300">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Contact;