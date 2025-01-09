import java.awt.*;
import java.awt.image.*;
import java.io.*;
import javax.imageio.ImageIO;

public class ImageResizer {

    public static void main(String[] args) {
        try {
            // Input image path
            File inputFile = new File("Images/Toyota Supra_ The Legend Lives.jpg"); // Replace with your image path
            BufferedImage img = ImageIO.read(inputFile);

            // List of desired widths
            int[] widths = {200, 400, 600, 800, 1200, 1600};

            // Loop through each width, resize, and save the resized image
            for (int width : widths) {
                // Calculate the height to maintain the aspect ratio
                int height = (int) (img.getHeight() * ((double) width / img.getWidth()));

                // Create a new resized image
                Image resizedImg = img.getScaledInstance(width, height, Image.SCALE_SMOOTH);

                // Convert the Image to BufferedImage
                BufferedImage bufferedResizedImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
                Graphics2D g2d = bufferedResizedImg.createGraphics();
                g2d.drawImage(resizedImg, 0, 0, null);
                g2d.dispose();

                // Output filename
                String outputFilename = "image-" + width + "w.jpg"; // Change extension as needed

                // Save the resized image
                File outputFile = new File(outputFilename);
                ImageIO.write(bufferedResizedImg, "jpg", outputFile);
                System.out.println("Saved: " + outputFilename);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
