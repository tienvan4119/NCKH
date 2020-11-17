import java.io.IOException;
import java.net.SocketException;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
public class ConnectionFTP {
    public static void main(String[] args) {
        FTPClient client = new FTPClient();
        try {
        client.connect("localhost", 21);
        if (!client.login("administrator", "123456")) {
            throw new Exception("Login fail!");
        }
            client.enterRemotePassiveMode();
            client.setFileType(FTP.BINARY_FILE_TYPE);
            System.out.println("Login is OK");
        } catch (SocketException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            if (null != client && client.isConnected()) {
                try {
                    client.logout();
                    client.disconnect();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}